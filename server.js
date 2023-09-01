const app = require('./app')
const PORT = require('dotenv').config()
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server runnning on 3000");
})