const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const StudentSchema = new mongoose.Schema({
    studentName : {type: String},
    studentId : {type: ObjectId},
    careerTrack : {type: String},
    achivements: {type: array},
    department: {type: String},
    year : {type: Number, default: 1}
    
});


const StudentModel = mongoose.model("Student",StudentSchema);

module.exports = StudentModel;