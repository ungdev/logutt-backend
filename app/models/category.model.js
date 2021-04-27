const sql = require('../config/db');
const SqlHandler = require('./handler/sqlHandler');

// constructor
const Category = function Category(category) {
  this.name = category.name;
  this.parent_id = category.parent_id;
};

Category.create = (newCategory, result) => {
  sql.query(
    'INSERT INTO categories SET ?',
    newCategory,
    SqlHandler.create(result, newCategory)
  );
};

Category.getAll = (result) => {
  sql.query('SELECT * FROM categories', SqlHandler.getAll(result));
};

Category.findById = (categoryId, result) => {
  sql.query(
    `SELECT * FROM categories WHERE id = ${categoryId}`,
    SqlHandler.findById(result)
  );
};

Category.updateById = (id, category, result) => {
  sql.query(
    'UPDATE categories SET ? WHERE id = ?',
    [category, id],
    SqlHandler.updateById(result, category, id)
  );
};

Category.remove = (id, result) => {
  sql.query(
    'DELETE FROM categories WHERE id = ?',
    id,
    SqlHandler.remove(result)
  );
};

module.exports = Category;
