
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('ui-list-group')
})
module.exports = router
