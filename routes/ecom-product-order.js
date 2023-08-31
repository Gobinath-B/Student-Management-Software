
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('ecom-product-order')
})
module.exports = router
