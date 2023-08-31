
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('page-error-400')
})
module.exports = router
