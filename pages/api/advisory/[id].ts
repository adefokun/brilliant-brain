import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Advisory from '@/models/AdvisoryModel';
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

    if (req.method !== 'DELETE' && req.method !== 'GET' && req.method !== 'PATCH') {
      return res.status(400).json({ message: 'Request Method Not allowed' })
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ message: 'ID is required' })

    if (req.method === 'DELETE') {
        
      const advisory = await Advisory.findByIdAndDelete(id).lean();
      console.log({ advisory })
     return res.status(200).json(advisory);
    }
    else if (req.method === 'GET') {
      const advisory = await Advisory.findById(id).lean();
      return res.status(200).json(advisory);
    }
    else if (req.method === 'PATCH') {
      const advisory = await Advisory.findByIdAndUpdate(id, req.body, { new: true }).lean();
      
      if (!advisory) return res.status(400).json({ message: 'update failed' })

      // console.log({ advisory })
      return res.status(200).json(advisory);
    }

  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}