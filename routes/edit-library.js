
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('edit-library',{careerRecommendation:null})
})
module.exports = router
