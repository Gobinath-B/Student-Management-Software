const express = require('express');
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentName : {type: String},
    studentId : {type: String,uniquie: true},
    careerTrack : {type: String},
    acadamics :{
        
    },
    monthlyTasks:{

    },
    
})

const StudentModel = mongoose.model("Student",StudentSchema);

module.exports = StudentModel;