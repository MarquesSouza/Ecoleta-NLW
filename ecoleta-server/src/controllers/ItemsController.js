const knex = require('../database/connection_db')

module.exports={
    async index(Request,Response,next){
        try{
            const items = await knex('items').select('*');

            const serializedItems = items.map(item => {
              return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.7:3333/uploads/${item.image}`,
              };
            });
        
            return response.json(serializedItems);
        }catch(error){
            next(error)
        }
    }
}