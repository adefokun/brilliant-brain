import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Winner from '@/models/CandidateModel';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (!req.body.email || !req.body.name || !req.body.position) return res.status(400).json({ message: 'Fill all required fields' })

    const winner = await Winner.create({
        email: req.body.email,
        name: req.body.name,
        position: req.body.position,
        image: req.body.image,
    });

    if (!winner) throw new Error('Post Failed')

    // console.log('winner', winner)
    res.status(200).json(winner);

  } catch (error: any) {
    console.error(error);
    res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}