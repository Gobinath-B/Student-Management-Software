
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('chart-chartjs')
})
module.exports = router
