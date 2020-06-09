const express = require('express')
const knex= require('./database/connection_db')
const routes = express.Router()

const PointsController= require('./controllers/PointsController')


routes.get('/',(Request,Response)=>{
    Response.json('Server Ligado')
})

routes.get('/points',PointsController.index)

module.exports = routes