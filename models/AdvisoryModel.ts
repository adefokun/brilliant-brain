import { IAdvisory } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const AdvisorySchema: Schema = new Schema<IAdvisory>({
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
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});


const AdvisoryModel = models.Advisory || model('Advisory', AdvisorySchema);


export default AdvisoryModel