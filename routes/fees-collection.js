
const express = require('express')
const router = express.Router()
const fb = require('../config/fb');
const db = fb.firestore();
var cookie = require("cookie");

router.get('/',(req,res)=>{
    const reqdata = req.body;
    var cookies = cookie.parse(req?.headers?.cookie || "");
    const id = cookies.student_id;
    const result = db.collection("students").doc(id).get();
    const data = result.data();
    res.render('fees-collection',{data:data});
})
module.exports = router
