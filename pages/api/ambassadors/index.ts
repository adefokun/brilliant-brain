import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Ambassador from '@/models/AmbassadorModel';
import { IAmbassador } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const session = await getServerSession(req, res, authOptions)
    // console.log({session})

    if (!session) {
      return res.status(401).json({ message: "You must be signed in to access this" });
    } 


    if (req.method === 'GET') {
      const ambassador = await Ambassador.find({}).lean();
      res.status(200).json(ambassador);
    }
    else {

      if (req.method !== 'POST') return res.status(400).json({ message: 'Request Method Not allowed' })

      if (!req.body.email || !req.body.name || !req.body.title || !req.body.image || !req.body.number) return res.status(400).json({ message: 'Fill all required fields' })
      
      const data: IAmbassador = {
        email: req.body.email,
        name: req.body.name,
        image: req.body.image,
        number: req.body.number,
        title: req.body.title
    }

      const ambassador = await Ambassador.create(data);

      if (!ambassador) throw new Error('Post Failed')

      // console.log('ambassador', ambassador)
      res.status(200).json(ambassador);
    }
  } catch (error: any) {
    console.error(error);
    res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}