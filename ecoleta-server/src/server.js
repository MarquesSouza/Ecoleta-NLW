const path = require('path')
const express = require("express")
const routes = require('./routes')
const app = express()

app.use(routes)

app.use((error,Request,Response,next)=>{
    Response.status(error.status||500)
    Response.json({error:error.message})
})
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333,()=>{

})