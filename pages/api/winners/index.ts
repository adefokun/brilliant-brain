import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Winner from '@/models/WinnerModel';
import { IWinner } from '@/interfaces';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === 'GET') {
      const candidates = await Winner.find({}).lean();
      return res.status(200).json(candidates);
    }
    else {

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!req.body.email || !req.body.name || !req.body.position) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
      
      const data: IWinner = {
        email: req.body.email,
        name: req.body.name,
        position: req.body.position,
        image: req.body.image,
        category: req.body.category,
    }

      const winner = await Winner.create(data);

      if (!winner) throw new Error('Post Failed')

      // console.log('winner', winner)
      return res.status(200).json(winner);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}