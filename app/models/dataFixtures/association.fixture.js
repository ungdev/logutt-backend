const Association = require('../association.model');
const FakerService = require('../../service/faker.service');

exports.create = async () => {
  const listName = await FakerService.post('Company Name').then(
    (response) => response.data.results
  );
  const res = [];
  for (let i = 0; i < listName.length; i += 1) {
    res.push(
      new Association({
        name: listName[i],
      })
    );
  }
  return res;
};
