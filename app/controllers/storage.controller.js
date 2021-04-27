const Storage = require('../models/storage.model');

// Create and Save a new Storage
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Storage
  const storage = new Storage({
    name: req.body.name,
    room: req.body.room,
  });

  // Save Storage in the database
  Storage.create(storage, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Storage.',
      });
    else res.send(data);
  });
};

// Retrieve all Storages from the database.
exports.findAll = (req, res) => {
  Storage.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving storages.',
      });
    else res.send(data);
  });
};

// Find a single Storage with a id
exports.findOne = (req, res) => {
  Storage.findById(req.params.storageId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Storage with id ${req.params.storageId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Storage with id ${req.params.storageId}`,
        });
      }
    } else res.send(data);
  });
};

// Update a Storage identified by the storageId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  Storage.updateById(req.params.storageId, req.body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Storage with id ${req.params.storageId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Storage with id ${req.params.storageId}`,
        });
      }
    } else res.send(data);
  });
};

// Delete a Storage with the specified storageId in the request
exports.delete = (req, res) => {
  Storage.remove(req.params.storageId, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Storage with id ${req.params.storageId}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Storage with id ${req.params.storageId}`,
        });
      }
    } else res.send({ message: `Storage was deleted successfully!` });
  });
};
