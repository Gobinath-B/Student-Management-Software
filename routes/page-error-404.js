
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('page-error-404')
})
module.exports = router
