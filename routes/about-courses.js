
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('about-courses')
})
module.exports = router
