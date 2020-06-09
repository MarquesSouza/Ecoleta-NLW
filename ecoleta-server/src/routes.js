const express = require('express')
const knex = require('./database/connection_db')
const routes = express.Router()

const PointsController = require('./controllers/PointsController')
const ItemsController = require('./controllers/ItemsController')

routes.get('/',(Request,Response)=>{
    Response.json('Server Status : ONLINE')
})

routes.get('/points',PointsController.index)
routes.post('/points',PointsController.create)
routes.get('/points/:id',PointsController.show)

routes.get('/items',ItemsController.index)

module.exports = routes