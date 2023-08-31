const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new mongoose.Schema({
month :{type: Date},
article:{type: Boolean, default :false},
bmc : {type: Boolean, default :false},
coding : {type: Boolean, default :false},
tieEvent: {type: Boolean, default :false},
exercism: {type: Boolean, default :false},
linkedInConnect: {type: Boolean, default :false},
videoResume : {type: Boolean, default :false},
});

const TaskModel = mongoose.model("Task",TaskSchema);

module.exports = TaskModel;