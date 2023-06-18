import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import News from '@/models/NewsModel';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method !== 'DELETE' && req.method !== 'GET' && req.method !== 'PATCH') {
      return res.status(400).json({ message: 'Request Method Not allowed' })
    }

    if (req.method === 'DELETE') {

      const session = await getServerSession(req, res, authOptions)
  
      if (!session) {
        return res.status(401).json({ message: "You must be signed in to access this" });
      } 

      const { id } = req.query;
      if (!id) return res.status(400).json({ message: 'ID is required' })
      
      const news = await News.findByIdAndDelete(id).lean();
      return res.status(200).json(news);

    } else if (req.method === 'GET') {
        const { id } = req.query;

        if (!id) return res.status(400).json({ message: 'ID is required' })
        const news = await News.findById(id).lean();

        if (!news) return res.status(400).json({ message: 'News not found' })
        return res.status(200).json(news);
    } else if (req.method === 'PATCH') {
        
        const session = await getServerSession(req, res, authOptions)
    
        if (!session) {
          return res.status(401).json({ message: "You must be signed in to access this" });
        } 
  
        const { id } = req.query;
        if (!id) return res.status(400).json({ message: 'ID is required' })

        const news = await News.findByIdAndUpdate(id, req.body, { new: true }).lean();
        if (!news) return res.status(400).json({ message: 'Failed to Update' })

        return res.status(200).json(news);
    }


  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}