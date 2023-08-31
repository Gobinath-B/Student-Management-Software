const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const EventSchema = new mongoose.Schema({
    eventId : {type: ObjectId},
    eventType: {type: String},
    eventDept : {type: String},
    eventName : {type: String},
    eventCollege : {type: String},
    location: {type: String},
    organizerNum : {type: Number},

});

const EventModel = mongoose.model("Event",EventSchema);
module.exports = EventModel;