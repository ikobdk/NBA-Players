
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players',function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('team');
    table.string('height');
    table.string('weight');
    table.string('position');
    table.integer('age');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
