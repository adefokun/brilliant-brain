import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import News from '@/models/NewsModel';
import { INews } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === 'GET') {
      const news = await News.find({}).lean();
      res.status(200).json(news);
    }
    else {
      const session = await getServerSession(req, res, authOptions)
      // console.log({session})
  
      if (!session) {
        return res.status(401).json({ message: "You must be signed in to access this" });
      } 

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!req.body.title || !req.body.snippet || !req.body.title || !req.body.image || !req.body.content) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
      
      const data: INews = {
        title: req.body.title,
        snippet: req.body.snippet,
        image: req.body.image,
        content: req.body.content,
    }

      const news = await News.create(data);

      if (!news) throw new Error('Failed to Create')

      // console.log('News', News)
      return res.status(200).json(news);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}