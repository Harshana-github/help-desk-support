import mongoose from "mongoose";

const Schema = mongoose.Schema

const imageSchema = new Schema({
    price : {
        type: Number,
        required: true,
    },
    photo: {
        type: String
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
      },
})

const Image = mongoose.model("Image", imageSchema)

export default Image