const associationFixture = require('./association.fixture');
const categoryFixture = require('./category.fixture');
const objectFixture = require('./object.fixture');
const objectInstanceFixture = require('./objectInstance.fixture');
const storageFixture = require('./storage.fixture');

const associationModel = require('../association.model');
const categoryModel = require('../category.model');
const objectModel = require('../object.model');
const objectInstanceModel = require('../objectInstance.model');
const storageModel = require('../storage.model');

function sqlHandler(err) {
  if (err) {
    throw err;
  }
}

exports.generateData = async (req, res) => {
  const listAssociation = await associationFixture.create();
  const listCategory = await categoryFixture.create();
  const listObject = await objectFixture.create(1);
  const listObject2 = await objectFixture.create(2);
  const listStorage = await storageFixture.create();
  const listObjectInstance1 = await objectInstanceFixture.create(1);
  const listObjectInstance2 = await objectInstanceFixture.create(2);

  listAssociation.forEach((element) => {
    associationModel.create(element, sqlHandler);
  });
  listCategory.forEach((element) => {
    categoryModel.create(element, sqlHandler);
  });
  listObject.forEach((element) => {
    objectModel.create(element, sqlHandler);
  });
  listObject2.forEach((element) => {
    objectModel.create(element, sqlHandler);
  });
  listStorage.forEach((element) => {
    storageModel.create(element, sqlHandler);
  });

  listObjectInstance1.forEach((element) => {
    objectInstanceModel.create(element, sqlHandler);
  });
  listObjectInstance2.forEach((element) => {
    objectInstanceModel.create(element, sqlHandler);
  });
  res.send('ok');
};
