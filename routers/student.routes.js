const express = require("express")
const { getAllStudents, createStudent, studentsWithNoMentors, assignOrChangeMentor, selectOneMentorAndAssignStudent, studentsOfMentor } = require("../controllers/student.controller")

const StudentRouter = express.Router()

StudentRouter.get("/",getAllStudents)
StudentRouter.post("/",createStudent)
StudentRouter.get("/no-mentors",studentsWithNoMentors)
StudentRouter.patch("/assign/:studentId",assignOrChangeMentor)
StudentRouter.patch("/assign-mentor",selectOneMentorAndAssignStudent)
StudentRouter.get("/students/:mentorId",studentsOfMentor)

module.exports = StudentRouter