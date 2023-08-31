const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const StudentModel = require('./models/schema.js');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/",(req,res)=>{res.render('index')});

module.exports = skillAssesment;