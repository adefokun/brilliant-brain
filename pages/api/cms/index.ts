import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Cms from '@/models/CmsModel';
import { ICms } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    

    if (req.method === 'GET') {
      const cms = await Cms.find({}).lean();
      res.status(200).json(cms);
    }
    else {

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      const session = await getServerSession(req, res, authOptions)
      console.log({session})

      if (!session) {
        return res.status(401).json({ message: "You must be signed in to access this" });
      } 
      
      const data: ICms = {
        hero: {
          header: req.body?.hero?.header,
          image: req.body?.hero?.image,
          text: req.body?.hero?.text
        },
        about: {
          header: req.body?.about?.header,
          image: req.body?.about?.image,
          text: req.body?.about?.text
        },
      }

      const cms = await Cms.create(data);

      if (!cms) throw new Error('Post Failed')

      // console.log('cms', cms)
      return res.status(200).json(cms);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}