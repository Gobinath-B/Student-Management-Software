
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('page-lock-screen')
})
module.exports = router
