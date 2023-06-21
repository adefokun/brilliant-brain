import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import AvailableScholarship from '@/models/AvailableScholarshipModel';
import { IAvailableScholarship } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === 'GET') {
      const scholarships = await AvailableScholarship.find({}).sort('-createdAt').lean();
      // console.log({scholarships})
      res.status(200).json(scholarships);
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

      console.log(req.body)

      if (!req.body.name || !req.body.start || !req.body.end || !req.body.category || !req.body.requirements) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
      
      const data: IAvailableScholarship = {
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        category: req.body.category,
        requirements: req.body.requirements,
      }



      const scholarships = await AvailableScholarship.create(data);

      if (!scholarships) throw new Error('Failed to Create')

      // console.log('scholarships', AvailableScholarship)
      return res.status(200).json(scholarships);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}