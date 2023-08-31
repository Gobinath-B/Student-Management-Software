const express = require('express')
const router = express.Router()
const fb = require('../config/fb')
const db = fb.firestore()

router.get('/',async (req,res)=>{
    const response = await db.collection('college_info').doc('cIajardAYY7ySgxH3nY1').get()
    const get_data = response.data()
    res.render('all-departments',{data:get_data.department, id:response.id})
})

module.exports = router
