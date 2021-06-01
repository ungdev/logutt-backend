const sql = require('../config/db');
const SqlHandler = require('./handler/sqlHandler');

// constructor
const Role = function Role(role) {
  this.name = role.name;
};

Role.create = (newRole, result) => {
  sql.query(
    'INSERT INTO roles SET ?',
    newRole,
    SqlHandler.create(result, newRole)
  );
};

Role.getAll = (result) => {
  sql.query('SELECT * FROM roles', SqlHandler.getAll(result));
};

Role.findById = (roleId, result) => {
  sql.query(
    `SELECT * FROM roles WHERE id = ${roleId}`,
    SqlHandler.findById(result)
  );
};

Role.updateById = (id, role, result) => {
  sql.query(
    'UPDATE roles SET ? WHERE id = ?',
    [role, id],
    SqlHandler.updateById(result, role, id)
  );
};

Role.remove = (id, result) => {
  sql.query('DELETE FROM roles WHERE id = ?', id, SqlHandler.remove(result));
};

module.exports = Role;
