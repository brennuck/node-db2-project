
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('VIN', 17).notNullable().index();

    tbl.string('make', 128).notNullable()
      
    tbl.string('model', 128).notNullable()

    tbl.integer('mileage').notNullable()

    tbl.boolean('automatic').defaultTo(true);

    tbl.boolean('clean').defaultTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
