const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const AcademicSchema = new mongoose.Schema({
    subjectId: {type: Number},
    subjectName:{type: String},
    departmentId: {type: ObjectId},

})

const AcademicModel = mongoose.model("Subject",AcademicSchema);

module.exports = AcademicModel;