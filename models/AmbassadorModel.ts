import { IAmbassador } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const AmbassadorSchema: Schema = new Schema<IAmbassador>({
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


const AmbassadorModel = models.Ambassador || model('Ambassador', AmbassadorSchema);


export default AmbassadorModel