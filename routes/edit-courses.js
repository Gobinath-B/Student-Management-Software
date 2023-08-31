
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('edit-courses')
})
module.exports = router
