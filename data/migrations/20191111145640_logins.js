
exports.up = function(knex) {
  return knex.schema
  .createTable('logins', tbl => {
      tbl.increments()
      tbl.string('username', 26)
      .unique()
      .notNullable()
      tbl.string('password', 26)
      .notNullable
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('logins')
};
