import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  location: {
      type: String,
      required: true,
  },
  nic: {
    type: Number,
    required: true,
  },
  techPersonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TechPerson",
    required: true,
  },
  supportDetails: {
    type: String,
    required: true,
  },
  progressStatus: {
    type: String,
    default: 'Opened',
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
