import { ICms } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const CmsSchema: Schema = new Schema<ICms>({
  hero: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      // required: true
    },
    image: {
      type: String,
      // required: true
    },
  },
  about: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      // required: true
    },
    image: {
      type: String,
      // required: true
    },
  },
}, {
  timestamps: true
});

const CmsModel = models.Cms || model('Cms', CmsSchema);


export default CmsModel