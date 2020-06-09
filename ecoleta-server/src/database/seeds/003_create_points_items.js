
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('point_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('point_items').insert([
        {id: 1, 
        point_id:'1',
        item_id:'1',
        },
        {id: 2, 
          point_id:'1',
          item_id:'2',
          },
        ]);
    });
};
