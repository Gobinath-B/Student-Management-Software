
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('professor-profile')
})
module.exports = router
