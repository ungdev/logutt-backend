const Object = require('../object.model');
const FakerService = require('../../service/faker.service');

exports.create = async (id) => {
  const listName = await FakerService.post('Product').then(
    (response) => response.data.results
  );
  const listDescription = await FakerService.post('Product Description').then(
    (response) => response.data.results
  );
  const listLendable = await FakerService.post('Boolean').then(
    (response) => response.data.results
  );
  const res = [];
  for (let i = 0; i < listName.length; i += 1) {
    res.push(
      new Object({
        name: listName[i],
        description: listDescription[i],
        lendable: listLendable[i] === 'true' ? 1 : 0,
        category_id: id,
      })
    );
  }
  return res;
};
