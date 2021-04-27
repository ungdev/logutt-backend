const sql = require('../config/db');
const SqlHandler = require('./handler/sqlHandler');

// constructor
const ObjectInstance = function ObjectInstance(objectInstance) {
  this.identifier = objectInstance.identifier;
  this.description = objectInstance.description;
  this.state = objectInstance.state;
  this.deposit = objectInstance.deposit;
  this.expiration = objectInstance.expiration;
  this.quantity = objectInstance.quantity ?? 1;
  this.storage_description = objectInstance.storage_description;
  this.object_id = objectInstance.object_id;
  this.association_id = objectInstance.association_id;
  this.storage_id = objectInstance.storage_id;
};

ObjectInstance.create = (newObjectInstance, result) => {
  sql.query(
    'INSERT INTO object_instances SET ?',
    newObjectInstance,
    SqlHandler.create(result, newObjectInstance)
  );
};

ObjectInstance.getAll = (result) => {
  sql.query('SELECT * FROM object_instances', SqlHandler.getAll(result));
};

ObjectInstance.findById = (objectId, result) => {
  sql.query(
    `SELECT * FROM object_instances WHERE id = ${objectId}`,
    SqlHandler.findById(result)
  );
};

ObjectInstance.updateById = (id, object, result) => {
  sql.query(
    'UPDATE object_instances SET ? WHERE id = ?',
    [object, id],
    SqlHandler.updateById(result, object, id)
  );
};

ObjectInstance.remove = (id, result) => {
  sql.query(
    'DELETE FROM object_instances WHERE id = ?',
    id,
    SqlHandler.remove(result)
  );
};

module.exports = ObjectInstance;
