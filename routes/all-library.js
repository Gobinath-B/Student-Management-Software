
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('all-library')
})
module.exports = router
