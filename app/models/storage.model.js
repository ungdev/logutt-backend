const sql = require("./db.js");
const SqlHandler = require('./sqlHandler');

// constructor
const Storage = function(storage) {
  this.name = storage.name;
  this.room = storage.room;
};

Storage.create = (newStorage, result) => {
  sql.query("INSERT INTO storage_spaces SET ?", newStorage, SqlHandler.create(result, newStorage));
};

Storage.getAll = result => {
  sql.query("SELECT * FROM storage_spaces", SqlHandler.getAll(result));
};

Storage.findById = (id, result) => {
  sql.query(`SELECT * FROM storage_spaces WHERE id = ${id}`, SqlHandler.findById(result));
};

Storage.updateById = (id, storage, result) => {
  sql.query(
    "UPDATE storage_spaces SET ? WHERE id = ?",
    [storage, id],
    SqlHandler.updateById(result, storage, id)
  );
};

Storage.remove = (id, result) => {
  sql.query("DELETE FROM storage_spaces WHERE id = ?", id, SqlHandler.remove(result));
};

module.exports = Storage;