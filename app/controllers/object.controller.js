const Object = require('../models/object.model');

// Create and Save a new Object
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Object
  const object = new Object({
    name: req.body.name,
    description: req.body.description,
    category_id: req.body.category_id,
    lendable: req.body.loanable,
  });

  // Save Object in the database
  Object.create(object, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Object.',
      });
    else res.send(data);
  });
};

// Retrieve all Objects from the database.
exports.findAll = (req, res) => {
  Object.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving objects.',
      });
    else res.send(data);
  });
};

// Find a single Object with a id
exports.findOne = (req, res) => {
  Object.findById(req.params.objectId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Objet with id ${req.params.objectId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Object with id ${req.params.objectId}`,
        });
      }
    } else res.send(data);
  });
};

// Update a Object identified by the objectId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Object
  const object = new Object({
    name: req.body.name,
    description: req.body.description,
    category_id: req.body.category_id,
    lendable: req.body.loanable,
  });

  Object.updateById(req.params.objectId, object, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Object with id ${req.params.objectId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Object with id ${req.params.objectId}`,
        });
      }
    } else res.send(data);
  });
};

// Delete a Object with the specified ObjectId in the request
exports.delete = (req, res) => {
  Object.remove(req.params.objectId, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Object with id ${req.params.objectId}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Object with id ${req.params.objectId}`,
        });
      }
    } else res.send({ message: `Object was deleted successfully!` });
  });
};
