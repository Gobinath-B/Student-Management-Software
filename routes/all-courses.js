
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('all-courses')
})
module.exports = router
