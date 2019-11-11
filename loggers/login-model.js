const db = require('../data/dbconfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('logins').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('logins').where(filter);
}

function add(user) {
  return db('logins')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('logins')
    .where({ id })
    .first();
}