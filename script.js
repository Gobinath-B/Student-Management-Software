const fs = require('fs')

const middle_route = (endpoint)=>`
app.use('/${endpoint}',${endpoint.replaceAll('-','_')})`

const files = fs.readdirSync(__dirname+"/views")
files.forEach(file=>{
    if(file.includes('.ejs')){
        let oldFileName = file.split('.')[0];
        fs.appendFileSync("temp.js",middle_route(oldFileName))
    }
})
