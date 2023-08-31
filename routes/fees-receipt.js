
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('fees-receipt')
})
module.exports = router
