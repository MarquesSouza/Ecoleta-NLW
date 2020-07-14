
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('points').del()
    .then(function () {
      // Inserts seed entries
      return knex('points').insert([
        {id: 1, 
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80',
          name: 'Recover Plant', 
          email: 'marquesde2013@gmail.com',
          whatsapp: '63 99952-1869', 
          latitude: '-10.161307', 
          longitude: '-48.886977', 
          city: 'Paraiso do Tocantins', 
          uf: 'Tocantins'},
          ]);
    });
};
