import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Winner from '@/models/WinnerModel';
import { IWinner } from '@/interfaces';


// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method !== 'DELETE') return res.status(400).json({ message: 'Request Method Not allowed' })

    if (req.method === 'DELETE') {
        const { id } = req.query;
    //   console.log('id', id)
      if (!id) return res.status(400).json({ message: 'ID is required' })
      const winner = await Winner.findByIdAndDelete(id).lean();
      console.log({ winner })
      res.status(200).json(winner);
    }


  } catch (error: any) {
    console.error(error);
    res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}