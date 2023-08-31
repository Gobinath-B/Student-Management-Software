
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('all-departments')
})
module.exports = router
