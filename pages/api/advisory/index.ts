import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Advisory from '@/models/AdvisoryModel';
import { IAdvisory } from '@/interfaces';
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
      const advisory = await Advisory.find({}).lean();
      res.status(200).json(advisory);
    }
    else {

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!req.body.email || !req.body.name || !req.body.title || !req.body.image || !req.body.number || !req.body.description) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
      
      const data: IAdvisory = {
        email: req.body.email,
        name: req.body.name,
        image: req.body.image,
        number: req.body.number,
        title: req.body.title,
        description: req.body.description,
    }

      const advisory = await Advisory.create(data);

      if (!advisory) throw new Error('Post Failed')

      // console.log('advisory', advisory)
      return res.status(200).json(advisory);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}