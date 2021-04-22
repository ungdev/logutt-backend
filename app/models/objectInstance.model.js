const sql = require("../config/db");
const SqlHandler = require('./handler/sqlHandler');

// constructor
const ObjectInstance = function(ObjectInstance) {
  this.identifier = ObjectInstance.identifier;
  this.description = ObjectInstance.description;
  this.state = ObjectInstance.state;
  this.deposit = ObjectInstance.deposit;
  this.expiration = ObjectInstance.expiration;
  this.quantity = ObjectInstance.quantity ?? 1;
  this.object_id = ObjectInstance.object_id;
};

ObjectInstance.create = (newObjectInstance, result) => {
  sql.query("INSERT INTO object_instances SET ?", newObjectInstance, SqlHandler.create(result, newObjectInstance));
};

ObjectInstance.getAll = result => {
  sql.query("SELECT * FROM object_instances", SqlHandler.getAll(result));
};

ObjectInstance.findById = (objectId, result) => {
  sql.query(`SELECT * FROM object_instances WHERE id = ${objectId}`, SqlHandler.findById(result));
};

ObjectInstance.updateById = (id, object, result) => {
  sql.query(
    "UPDATE object_instances SET ? WHERE id = ?",
    [object, id],
    SqlHandler.updateById(result, object, id)
  );
};

ObjectInstance.remove = (id, result) => {
  sql.query("DELETE FROM object_instances WHERE id = ?", id, SqlHandler.remove(result));
};

module.exports = ObjectInstance;