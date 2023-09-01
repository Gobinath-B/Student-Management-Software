
const express = require('express')
const router = express.Router()
const cookie = require('cookie');
const fb = require('../config/fb');
const db = fb.firestore();

router.get('/',async(req,res)=>{
   const id = 'Swq0AKtoqJTUpwmNPCnV'; //req.header.id;
   const taskData = await db.collection("task").doc(id).get(); 
   res.render("all-holiday",{data:taskData.data()}); 
})


module.exports = router
