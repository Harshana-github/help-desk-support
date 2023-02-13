import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";

// @desc    get ticket
// @route   get /api/get-ticket
// @access Public
const getTicket = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find();
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ tickets });
});

// @desc    Add ticket
// @route   POST /api/add-ticket
// @access Public
const addTicket = asyncHandler(async (req, res) => {
  const nic = req.body.nic;
  const name = req.body.name;
  const contact = req.body.contact;
  const location = req.body.location;
  const supportDetails = req.body.suportDetails;
  const techPerson = req.body.techPeopleId

  const newTicket = new Ticket({
    nic,
    name,
    contact,
    location,
    supportDetails,
    techPersonId:techPerson
  });

  try {
    await newTicket.save();
    res.json(newTicket);
  } catch (err) {
    console.log(err);
  }
});

// @desc    Update single ticket status
// @route   PUT /api/get-ticket/:id
// @access Public
const getTicketById = asyncHandler(async (req, res) => {
  const ticketId = req.params.id;
  const status = req.body.event;
  const oneTicket = await Ticket.findById(req.params.id);
  const updatedState = await Ticket.findByIdAndUpdate(
    ticketId,
    { progressStatus: status },
    { new: true }
  );
  if (updatedState) {
    res.json(updatedState);
  } else {
    throw new Error("Ticket Not Found");
  }
  res.status(404);
});

export { getTicket, addTicket, getTicketById };
