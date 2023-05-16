import { models, model, Schema } from 'mongoose';

const CandidateSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});


const CandidateModel = models.Candidate || model('Candidate', CandidateSchema);


export default CandidateModel