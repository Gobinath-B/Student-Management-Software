
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('uc-noui-slider')
})
module.exports = router
