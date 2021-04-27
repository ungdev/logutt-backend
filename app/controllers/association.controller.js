const Association = require('../models/association.model');

// Create and Save a new Association
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Association
  const association = new Association({
    name: req.body.name,
  });

  // Save Association in the database
  Association.create(association, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Association.',
      });
    else res.send(data);
  });
};

// Retrieve all Associations from the database.
exports.findAll = (req, res) => {
  Association.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving associations.',
      });
    else res.send(data);
  });
};

// Find a single Association with a id
exports.findOne = (req, res) => {
  Association.findById(req.params.associationId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Association with id ${req.params.associationId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Association with id ${req.params.associationId}`,
        });
      }
    } else res.send(data);
  });
};

// Update a Associartion identified by the assiciationId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  Association.updateById(req.params.associationId, req.body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Association with id ${req.params.associationId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Association with id ${req.params.associationId}`,
        });
      }
    } else res.send(data);
  });
};

// Delete a Association with the specified associationId in the request
exports.delete = (req, res) => {
  Association.remove(req.params.associationId, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Association with id ${req.params.associationId}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Association with id ${req.params.associationId}`,
        });
      }
    } else res.send({ message: `Association was deleted successfully!` });
  });
};
