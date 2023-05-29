import { IAboutUs } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const AboutSchema: Schema = new Schema<IAboutUs>({
  first_section: {
    image: {
      type: String,
      required: true,
    },
    text: {
        type: String,
        required: true,
    }
  },
  second_section: {
    image: {
      type: String,
      required: true,
    },
    text: {
        type: String,
        required: true,
    }
  },
    third_section: {
        type: String,
        required: true,
    }
}, {
  timestamps: true
});

const AboutModel = models.About || model('About', AboutSchema);


export default AboutModel