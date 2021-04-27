const Category = require('../category.model');
const FakerService = require('../../service/faker.service');

exports.create = async () => {
  const listName = await FakerService.post('Product Material').then(
    (response) => response.data.results
  );
  const res = [];
  for (let i = 0; i < listName.length; i += 1) {
    res.push(
      new Category({
        name: `${listName[i]}UTT`,
      })
    );
  }
  return res;
};
