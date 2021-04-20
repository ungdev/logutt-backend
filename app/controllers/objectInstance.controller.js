const ObjectInstance = require('../models/objectInstance.model')

// Create and Save a new ObjectInstance
exports.create = (req, res) => {
    // Validate request
    if (!req.body || !req.params.objectId) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }
    // Create a ObjectInstance
    const objectInstance = new ObjectInstance({
        identifier: ObjectInstance.identifier,
        description: ObjectInstance.description,
        state: ObjectInstance.state,
        deposit: ObjectInstance.deposit,
        expiration: ObjectInstance.expiration,
        quantity: ObjectInstance.quantity,
        object_id: req.params.objectId,
    });

    // Save ObjectInstance in the database
    ObjectInstance.create(objectInstance, (err, data) => {
        if (err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ObjectInstance."
        });
        else res.send(data);
    });
};

// Retrieve all ObjectInstance from the database.
exports.findAll = (req, res) => {
    ObjectInstance.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving objects."
          });
        else res.send(data);
    });
};

// Find a single ObjectInstance with a id
exports.findOne = (req, res) => {
    ObjectInstance.findById(req.params.objectInstanceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found ObjectInstance with id ${req.params.objectInstanceId}.`
            });
            } else {
            res.status(500).send({
                message: "Error retrieving ObjectInstance with id " + req.params.objectInstanceId
            });
            }
        } else res.send(data);
    });
};

// Update a ObjectInstance identified by the objectInstanceId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    ObjectInstance.updateById(req.params.objectInstanceId, req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ObjectInstance with id ${req.params.objectInstanceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating ObjectInstance with id " + req.params.objectInstanceId
                });
            }
        } else res.send(data);
    });
};

// Delete a ObjectInstance with the specified ObjectId in the request
exports.delete = (req, res) => {
    ObjectInstance.remove(req.params.objectInstanceId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ObjectInstance with id ${req.params.objectInstanceId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete ObjectInstance with id " + req.params.objectInstanceId
            });
          }
        } else res.send({ message: `ObjectInstance was deleted successfully!` });
    });
};