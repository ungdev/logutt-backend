const Storage = require('../storage.model');
const FakerService = require('../../service/faker.service');

exports.create = async () => {
  const listIdentifier = await FakerService.post('Last Name').then(
    (response) => response.data.results
  );
  const listDescription = await FakerService.post('Number').then(
    (response) => response.data.results
  );
  const res = [];
  for (let i = 0; i < listIdentifier.length; i += 1) {
    res.push(
      new Storage({
        name: listIdentifier[i],
        room: listDescription[i],
      })
    );
  }
  return res;
};
