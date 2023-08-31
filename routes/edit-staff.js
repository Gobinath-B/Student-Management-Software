
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('edit-staff')
})
module.exports = router
