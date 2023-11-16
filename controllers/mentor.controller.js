const MentorModel = require("../models/mentor.model");


async function getAllMentorDetails(req,res,next){
  try{
      const mentors = await MentorModel.find();
      res.send(mentors);
    }catch(err){
      res.status(400).send(err);
    }
}

async function createMentor(req,res,next){
  const {name,email,course} = req.body;
  const addMentor = new MentorModel({
      "name" : name,
      "email" : email,
      "course" : course
  })
  try{
      const newMentor = await addMentor.save();
      res.send(newMentor)
  }catch(err){
      res.status(500);
      res.send(err);
  }
}

async function getMentorId(req,res,next){
  const {mentorId} = req.params;
  try{
      const mentor = await MentorModel.findById({_id : mentorId})
      res.status(200).send(mentor);
  }catch(err){
      res.status(500);
      res.send(err);
  }
}

module.exports = {
  getAllMentorDetails,
    createMentor,
    getMentorId
}