
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('about-student')
})
module.exports = router
