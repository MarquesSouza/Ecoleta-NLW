const knex = require('../database/connection_db')

module.exports={
    async index(Request,Response,next){
        try{
            const { city, uf, items } = Request.query
            const parsedItems = String(items).split(',').map(item => Number(item.trim()));
            
            const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');
            const serializedPoints = points.map(point => {
                return {
                  ...point,
                  image_url: `http://127.0.0.1:3333/uploads/${point.image}`,
                };
              });
              
            return Response.json(serializedPoints);
        }catch(error){
            next(error)
        }
        
    },
    async show(Request,Response,next){
        try{
            const { id } = request.params;

            const point = await knex('points').where('id', id).first();

            if (!point) {
                return response.status(400).json({ message: 'Point not found' });
            }

            const serializedPoint = {
                ...point,
                image_url: `http://127.0.0.1:3333/uploads/${point.image}`,
            };

            const items = await knex('items')
                .join('point_items', 'items.id', '=', 'point_items.item_id')
                .where('point_items.point_id', id)
                .select('items.title');

            return response.json({ point: serializedPoint, items });
        }catch(error){
            next(error)
        }
        
    },
    async create(Request,Response,next){
        try{
            const {
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf,
                items,
              } = Request.body;
          
              const trx = await knex.transaction();
          
              const point = {
                image: Request.file.filename,
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf,
              };
          
              const insertedIds = await trx('points').insert(point);
          
              const point_id = insertedIds[0];
          
              const pointItems = items.map((item_id) => {
                return {
                  item_id,
                  point_id,
                };
              });
          
              await trx('point_items').insert(pointItems);
          
              await trx.commit();
          
              return response.json({
                id: point_id,
                ...point,
              })
        }catch(error){
            next(error)
        }
        
    }
}