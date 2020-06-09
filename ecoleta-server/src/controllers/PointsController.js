const knex = require('../database/connection_db')

module.exports={
    async index(Request,Response){
        const results=await knex('points')
        return Response.json(results)
    }
}