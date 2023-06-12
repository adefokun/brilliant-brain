import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Faqs from '@/models/FaqsModel';
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

    if (req.method === 'DELETE') {
        const { id } = req.query;
    //   console.log('id', id)
      if (!id) return res.status(400).json({ message: 'ID is required' })
      const faqs = await Faqs.findByIdAndDelete(id).lean();
      // console.log({ faqs })
     return res.status(200).json(faqs);
    } else if (req.method === 'GET') {
      const { id } = req.query;
      // console.log('id', id)
      if (!id) return res.status(400).json({ message: 'ID is required' })
      const faq = await Faqs.findById(id).lean();

      if (!faq) return res.status(400).json({ message: 'FAQ not found' })
      // console.log({ faqs })
      return res.status(200).json(faq);
    } else if (req.method === 'PATCH') {
      const { id } = req.query;
      // console.log('id', id)
      if (!id) return res.status(400).json({ message: 'ID is required' })

      const faq = await Faqs.findByIdAndUpdate(id, req.body, { new: true }).lean();

      if (!faq) return res.status(400).json({ message: 'failed to update' })
      // console.log({ faq })
      return res.status(200).json(faq);
    }


  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}