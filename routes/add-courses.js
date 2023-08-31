
const { async } = require('@firebase/util')
const express = require('express')
const router = express.Router()
const db = require('../config/fb').firestore()
router.get('/', async(req,res)=>{
    const departments =  await db
    .collection('college_info')
    .doc('cIajardAYY7ySgxH3nY1')
    .get()

    const departs = await departments.data()
    console.log(departs);
    res.render('add-courses',{departments:departs?.department})
})
router.post('/',async (req,res)=>{
    const {
        id,
        depart,
        name,
        duration
    } = req.body

    const departments =  await db
    .collection('college_info')
    .doc('cIajardAYY7ySgxH3nY1')
    .get()
    
    const departs = await departments.data()
    
    await db.collection('subjects').doc().set({
        id:id,
        depart:depart,
        name:name,
        duration:duration,  
    })
    
    console.log(departments);
    
    res.redirect('/add-courses')
})
module.exports = router
