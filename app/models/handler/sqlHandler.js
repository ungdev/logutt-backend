exports.create = (result, newElement) => (err, res) => {
  if (err) {
    result(err, null);
    return;
  }

  result(null, { id: res.insertId, ...newElement });
};

exports.getAll = (result) => (err, res) => {
  if (err) {
    result(null, err);
    return;
  }

  result(null, res);
};

exports.findById = (result) => (err, res) => {
  if (err) {
    result(err, null);
    return;
  }

  if (res.length) {
    result(null, res[0]);
    return;
  }

  // not found Object with the id
  result({ kind: 'not_found' }, null);
};

exports.updateById = (result, element, id) => (err, res) => {
  if (err) {
    result(null, err);
    return;
  }

  if (res.affectedRows === 0) {
    // not found with the id
    result({ kind: 'not_found' }, null);
    return;
  }

  result(null, { id, ...element });
};

exports.remove = (result) => (err, res) => {
  if (err) {
    result(null, err);
    return;
  }

  if (res.affectedRows === 0) {
    // not found Object with the id
    result({ kind: 'not_found' }, null);
    return;
  }

  result(null, res);
};
