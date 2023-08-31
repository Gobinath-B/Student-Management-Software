const fs = require('fs')

const middle_route = (endpoint)=>`
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{

})
module.exports = router
`

const files = fs.readdirSync(__dirname+"/views")
files.forEach(file=>{
    if(file.includes('.ejs')){
        let oldFileName = file.split('.')[0];
        fs.writeFileSync(__dirname+"/routes/"+oldFileName+'.js',middle_route(oldFileName))
    }
})
