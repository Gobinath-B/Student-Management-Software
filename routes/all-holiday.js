
const express = require('express')
const router = express.Router()
const cookie = require('cookie');
const fb = require('../config/fb');
const db = fb.firestore();



router.get('/',async(req,res)=>{
    const reqdata = req.body;
    const id = 'Swq0AKtoqJTUpwmNPCnV'; //req.header.id;
    
   const docData = await db.collection("students").doc(id).get();
   var data = docData.data();
   console.log(data);
//    const article = result.task.article;
//    const bmc = result.task.bmc;
//    const start = result.startDate;
//    const end = result.endDate;
//    const data = {
//     article:article,
//     bmc:bmc,
//     start:start,
//     end:end
//    }
   
   res.render("all-holiday",{data:data});
    
})

module.exports = router
