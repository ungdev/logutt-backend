const sql = require('../config/db');
const SqlHandler = require('./handler/sqlHandler');

// constructor
const User = function User(user) {
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.phone = user.phone;
  this.token = user.token;
};

User.create = (newUser, result) => {
  sql.query(
    'INSERT INTO users SET ?',
    newUser,
    SqlHandler.create(result, newUser)
  );
};

User.getAll = (result) => {
  sql.query('SELECT * FROM users', SqlHandler.getAll(result));
};

User.findById = (userId, result) => {
  sql.query(
    `SELECT * FROM users WHERE id = ${userId}`,
    SqlHandler.findById(result)
  );
};

User.updateById = (id, user, result) => {
  sql.query(
    'UPDATE users SET ? WHERE id = ?',
    [user, id],
    SqlHandler.updateById(result, user, id)
  );
};

User.remove = (id, result) => {
  sql.query('DELETE FROM users WHERE id = ?', id, SqlHandler.remove(result));
};

module.exports = User;
