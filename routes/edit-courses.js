const express = require('express')
const router = express.Router()
const db = require('../config/fb').firestore()
router.get('/:id',async (req,res)=>{
    
    const subject_id =req.params.id
    const subjects =  await db
    .collection('subjects')
    .doc(subject_id)
    .get()

    const departments =  await db
    .collection('college_info')
    .doc('cIajardAYY7ySgxH3nY1')
    .get()
    
    const departs = await departments.data()
    res.render('edit-courses',{departments:departs?.department, data: subjects.data()})
})
router.post('/:id',async (req,res)=>{
    const subject_id = req.params.id
    const {
        id,
        depart,
        name,
        duration
    } = req.body
    await db.collection('subjects').doc(subject_id).update({
        id:id,
        depart:depart,
        name:name,
        duration:duration,  
    })
    res.redirect('/add-courses')
})
module.exports = router
