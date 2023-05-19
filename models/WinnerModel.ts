import { IWinner } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const WinnerSchema: Schema = new Schema<IWinner>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});


const WinnerModel = models.Winner || model('Winner', WinnerSchema);


export default WinnerModel