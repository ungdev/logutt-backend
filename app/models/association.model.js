const sql = require("../config/db");
const SqlHandler = require('./handler/sqlHandler');

// constructor
const Association = function(association) {
  this.name = association.name;
};

Association.create = (newAssociation, result) => {
  sql.query("INSERT INTO associations SET ?", newAssociation, SqlHandler.create(result, newAssociation));
};

Association.getAll = result => {
  sql.query("SELECT * FROM associations", SqlHandler.getAll(result));
};

Association.findById = (id, result) => {
  sql.query(`SELECT * FROM associations WHERE id = ${id}`, SqlHandler.findById(result));
};

Association.updateById = (id, association, result) => {
  sql.query(
    "UPDATE associations SET ? WHERE id = ?",
    [association, id],
    SqlHandler.updateById(result, association, id)
  );
};

Association.remove = (id, result) => {
  sql.query("DELETE FROM associations WHERE id = ?", id, SqlHandler.remove(result));
};

module.exports = Association;