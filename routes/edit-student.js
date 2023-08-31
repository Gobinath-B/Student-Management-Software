
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('edit-student')
})
module.exports = router
