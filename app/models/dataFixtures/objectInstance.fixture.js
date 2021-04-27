const ObjectInstance = require('../objectInstance.model');
const FakerService = require('../../service/faker.service');

exports.create = async (id) => {
  const listIdentifier = await FakerService.post('Product Adjective').then(
    (response) => response.data.results
  );
  const listDescription = await FakerService.post('Product Description').then(
    (response) => response.data.results
  );
  const listState = await FakerService.post('Boolean').then(
    (response) => response.data.results
  );
  const listDeposit = await FakerService.post('Number').then(
    (response) => response.data.results
  );
  const res = [];
  for (let i = 0; i < listIdentifier.length; i += 1) {
    res.push(
      new ObjectInstance({
        identifier: listIdentifier[i],
        description: listDescription[i],
        state: listState[i],
        deposit: listDeposit[i],
        object_id: id,
        association_id: id,
        storage_id: id,
      })
    );
  }
  return res;
};
