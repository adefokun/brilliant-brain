import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Faqs from '@/models/FaqsModel';
import { IFaqs } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const session = await getServerSession(req, res, authOptions)
    // console.log({session})


    if (req.method === 'GET') {
      const faqs = await Faqs.find({}).lean();
      res.status(200).json(faqs);
    }
    else {

      if (!session) {
        return res.status(401).json({ message: "You must be signed in to access this" });
      } 

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!req.body.question || !req.body.answer) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
      
      const data: IFaqs = {
        question: req.body.question,
        answer: req.body.answer,

    }

      const faqs = await Faqs.create(data);

      if (!faqs) throw new Error('Post Failed')

      // console.log('Faqs', Faqs)
      return res.status(200).json(faqs);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}