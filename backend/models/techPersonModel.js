import mongoose from 'mongoose';

const techPersonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  }
)

const TechPerson = mongoose.model('TechPerson', techPersonSchema);

export default TechPerson;