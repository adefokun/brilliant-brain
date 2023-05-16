import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Candidate from '@/models/CandidateModel';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (!req.body.email || !req.body.name || !req.body.type) return res.status(400).json({ message: 'Fill all required fields' })

    const candidate = await Candidate.create({
        email: req.body.email,
        name: req.body.name,
        type: req.body.type,
    });

    if (!candidate) throw new Error('Post Failed')

    // console.log('candidate', candidate)
    res.status(200).json(candidate);

  } catch (error: any) {
    console.error(error);
    res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}