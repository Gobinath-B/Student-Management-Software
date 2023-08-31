const express = require('express')
const router = express.Router()
const db = require('./../config/fb').firestore()
router.get('/',async (req,res)=>{
    const subjects = []
    const subjects_reponse = (await db.collection('subjects').get()).docs
    subjects_reponse.forEach(subject=>{
        subjects.push({docId:subject.id, ...subject.data()})
    })
    console.log(subjects);
    res.render('all-courses',{data:subjects})
})
module.exports = router
