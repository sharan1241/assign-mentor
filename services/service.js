const express = require("express")
const MentorRouter = require("../routers/mentor.routes")
const StudentRouter = require("../routers/student.routes")
const API_SERVER = express()

API_SERVER.use("/mentor",MentorRouter)
API_SERVER.use("/student",StudentRouter)

module.exports = API_SERVER