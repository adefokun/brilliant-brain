import { IAvailableScholarship } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const AvailableScholarshipSchema: Schema = new Schema<IAvailableScholarship>({
  name: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const AvailableScholarshipModel = models.AvailableScholarship || model('AvailableScholarship', AvailableScholarshipSchema);


export default AvailableScholarshipModel