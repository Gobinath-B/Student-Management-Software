
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('form-element')
})
module.exports = router
