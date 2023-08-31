
const express = require('express')
const router = express.Router()
const fb = require('../config/fb');
const db = fb.firestore();

router.get('/',async(req,res)=>{
    const reqdata = req.body;
    const id = 'Swq0AKtoqJTUpwmNPCnV';
   const result = await db.collection("students").doc(id).get();
   const data = result.data();
   const f1 = data.fee.fe1;
   const f2 = data.fee.fe2;
   const total = f1+f2+1000;

   console.log(total);
   
    res.render('fees-receipt',{data:data,total:total});
})
module.exports = router
