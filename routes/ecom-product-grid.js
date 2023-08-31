
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('ecom-product-grid')
})
module.exports = router
