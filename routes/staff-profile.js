
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('staff-profile')
})
module.exports = router
