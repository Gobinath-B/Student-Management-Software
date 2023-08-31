
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('table-bootstrap-basic')
})
module.exports = router
