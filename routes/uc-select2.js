
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('uc-select2')
})
module.exports = router
