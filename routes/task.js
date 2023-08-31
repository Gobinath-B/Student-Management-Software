const express = require('express')
const router = express.Router();
const fb = require('../config/fb');
const db = fb.firestore();

router.post("/",async (req,res)=>{
    const reqdata = req.body;
    const id = 'Swq0AKtoqJTUpwmNPCnV'; //req.header.id;
    
   const data = await db.collection("students").doc(id).get();

   res.render("all-holiday",{data:data});

    
})

module.exports = router;