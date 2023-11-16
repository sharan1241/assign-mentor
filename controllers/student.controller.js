const StudentModel = require("../models/student.model");


async function getAllStudents(req,res,next){
  try{
    const students = await StudentModel.find({}).populate('Mentor').exec((err,result) => {
        if(!err){
            res.json(result)
        }
    });
    }catch(err){
      res.status(400).send(err);
    }
}

async function createStudent(req,res,next){
  const addStudent = new StudentModel({
    "name" : req.body.name,
    "batch" : req.body.batch,
    "mentor" : req.body.mentor ? req.body.mentor : undefined
 })
try{
    const newStudent = await addStudent.save();
    res.send(newStudent)
}catch(err){
    res.status(500);
    res.send(err);
}
}

async function studentsWithNoMentors(req,res,next){
  const students = await StudentModel.find({mentor:undefined})
    res.send(students);
}

async function assignOrChangeMentor(req,res,next){
  const {studentId} = req.params;
    const {mentor} = req.body;
    try{
        const student = await StudentModel.findById(studentId);
        student.mentor = mentor;
        await student.save();
        res.send(student);
    }catch(err){
        res.status(500);
        res.send(err);
    }
}

async function selectOneMentorAndAssignStudent(req,res,next){
  const {mentor,stud_list} = req.body;
    console.log(stud_list)
    try{
        stud_list.map( async (stud_id) => {
            const student = await StudentModel.findById(stud_id)
            student.mentor = mentor;
            await student.save();
        })
        res.send("Updated Successfully");  
    }catch(err){
        res.status(500);
        res.send(err);
    }
}

async function studentsOfMentor(req,res,next){
  const {mentorId} = req.params;
    try{
        const students = await StudentModel.find({mentor : mentorId});
        res.send(students);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    studentsWithNoMentors,
    assignOrChangeMentor,
    selectOneMentorAndAssignStudent,
    studentsOfMentor
}