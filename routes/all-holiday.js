
const express = require('express')
const router = express.Router()
const cookie = require('cookie');
const fb = require('../config/fb');
const db = fb.firestore();



router.get('/',async(req,res)=>{
    const reqdata = req.body;
    var cookies = cookie.parse(req?.headers?.cookie || "");
    const id = cookie.student_id;
   const taskData = await db.collection("task").doc(id).get(); 
   const docData = await db.collection("students").doc(id).get();
   var data = docData.data();
   console.log(data);
   var taskd =  taskData.data()
  // console.log(taskd);
   res.render("all-holiday",{data:data,taskd:taskd});
    
})
module.exports = router
