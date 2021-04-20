exports.create = (result, newElement) => {
  return (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newElement });
  }
};

exports.getAll = (result) => {
  return (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  };
};

exports.findById = (result) => {
  return (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Object with the id
    result({ kind: "not_found" }, null);
  };
};

exports.updateById = (result, element, id) => {
  return (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, { id: id, ...element });
  };
}

exports.remove = (result) => {
  return (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Object with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  };
};