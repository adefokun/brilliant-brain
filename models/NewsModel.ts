import { INews } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const NewsSchema: Schema = new Schema<INews>({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const NewsModel = models.News || model('News', NewsSchema);


export default NewsModel