import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Ambassador from '@/models/AmbassadorModel';
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
    const { id } = req.query;
    
    if (!id) return res.status(400).json({ message: 'ID is required' })

    if (req.method !== 'DELETE' && req.method !== 'GET' && req.method !== 'PATCH') {
      return res.status(400).json({ message: 'Request Method Not allowed' })
    }

    if (req.method === 'DELETE') {
      const ambassador = await Ambassador.findByIdAndDelete(id).lean();
      if (!ambassador) return res.status(400).json({ message: 'delete failed' })
      // console.log({ ambassador })
      return res.status(200).json(ambassador);
    } else if (req.method === 'GET') {
      const ambassador = await Ambassador.findById(id).lean();
      if (!ambassador) return res.status(400).json({ message: 'not found' })
      // console.log({ ambassador })
      return res.status(200).json(ambassador);
    } else if (req.method === 'PATCH') {
      const ambassador = await Ambassador.findByIdAndUpdate(id, req.body, { new: true }).lean();
      if (!ambassador) return res.status(400).json({ message: 'update failed' })
      // console.log({ ambassador })
      return res.status(200).json(ambassador);
    }


  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}