import asyncHandler from "express-async-handler";
import TechPerson from "../models/techPersonModel.js";

// @desc    get tech-people
// @route   get /api/get-tech
// @access Public
const getTechPeoples = asyncHandler(async (req, res) => {
  const techPeoples = await TechPerson.find();
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ techPeoples });
});

// @desc    Fetch single tech-person
// @route   GET /api/get-tech/:id
// @access Public
const getTechPeopleById = asyncHandler(async (req, res) => {
  const techPerson = await TechPerson.findById(req.params.id)

  if (techPerson) {
    res.json(techPerson)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getTechPeoples, getTechPeopleById };

