import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Advisory from '@/models/AdvisoryModel';


// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method !== 'DELETE') {
      return res.status(400).json({ message: 'Request Method Not allowed' })
    }

    if (req.method === 'DELETE') {
        const { id } = req.query;
    //   console.log('id', id)
      if (!id) return res.status(400).json({ message: 'ID is required' })
      const advisory = await Advisory.findByIdAndDelete(id).lean();
      console.log({ advisory })
     return res.status(200).json(advisory);
    }


  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}