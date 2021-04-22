const sql = require("../config/db");
const SqlHandler = require('./handler/sqlHandler');

// constructor
const Object = function(object) {
  this.name = object.name;
  this.description = object.description;
  this.category_id = object.category_id;
  this.lendable = object.lendable ?? 0;
};

Object.create = (newObject, result) => {
  sql.query("INSERT INTO Objects SET ?", newObject, SqlHandler.create(result, newObject));
};

Object.getAll = result => {
  sql.query("SELECT * FROM objects", SqlHandler.getAll(result));
};

Object.findById = (objectId, result) => {
  sql.query(`SELECT * FROM Objects WHERE id = ${objectId}`, SqlHandler.findById(result));
};

Object.updateById = (id, object, result) => {
  sql.query(
    "UPDATE Objects SET ? WHERE id = ?",
    [object, id],
    SqlHandler.updateById(result, object, id)
  );
};

Object.remove = (id, result) => {
  sql.query("DELETE FROM Objects WHERE id = ?", id, SqlHandler.remove(result));
};

module.exports = Object;