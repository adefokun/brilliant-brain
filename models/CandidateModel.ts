import { ICandidate } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const CandidateSchema: Schema = new Schema<ICandidate>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});


const CandidateModel = models.Candidate || model('Candidate', CandidateSchema);


export default CandidateModel