const express = require("express")
const {  createMentor, getAllMentorDetails, getMentorId } = require("../controllers/mentor.controller")

const MentorRouter = express.Router()

MentorRouter.get("/",getAllMentorDetails)
MentorRouter.post("/",createMentor)
MentorRouter.get("/:mentorId",getMentorId)

module.exports = MentorRouter