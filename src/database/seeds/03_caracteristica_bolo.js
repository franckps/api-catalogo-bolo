
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('caracteristica_bolo').del()
      .then(function () {
        // Inserts seed entries
        return knex('caracteristica_bolo').insert([
          {id_bolo: 1, id_caracteristica: 1},
          {id_bolo: 2, id_caracteristica: 2},
          {id_bolo: 2, id_caracteristica: 3},
          {id_bolo: 3, id_caracteristica: 4},
          {id_bolo: 4, id_caracteristica: 5},
          {id_bolo: 5, id_caracteristica: 6},
          {id_bolo: 6, id_caracteristica: 6},
          {id_bolo: 6, id_caracteristica: 7},
          {id_bolo: 7, id_caracteristica: 7},
          {id_bolo: 8, id_caracteristica: 8},
          {id_bolo: 9, id_caracteristica: 7},
          {id_bolo: 10, id_caracteristica: 9},
          {id_bolo: 11, id_caracteristica: 9},
          {id_bolo: 11, id_caracteristica: 10},
          {id_bolo: 12, id_caracteristica: 9},
          {id_bolo: 12, id_caracteristica: 11},
          {id_bolo: 13, id_caracteristica: 9},
          {id_bolo: 13, id_caracteristica: 7},
          {id_bolo: 14, id_caracteristica: 11},
          {id_bolo: 15, id_caracteristica: 12},
          {id_bolo: 16, id_caracteristica: 12},
          {id_bolo: 16, id_caracteristica: 13},
          {id_bolo: 17, id_caracteristica: 14},
          {id_bolo: 18, id_caracteristica: 13},
          {id_bolo: 19, id_caracteristica: 15},
          {id_bolo: 19, id_caracteristica: 3},
          {id_bolo: 20, id_caracteristica: 3},
          {id_bolo: 20, id_caracteristica: 15},
          {id_bolo: 20, id_caracteristica: 16},
          {id_bolo: 21, id_caracteristica: 17},
        ]);
      });
  };
  