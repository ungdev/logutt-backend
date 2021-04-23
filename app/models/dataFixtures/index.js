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

exports.generateData = async (req, res) => {
    let listAssociation = await associationFixture.create();
    let listCategory = await categoryFixture.create();
    let listObject = await objectFixture.create();
    let listStorage = await storageFixture.create();
    let listObjectInstance1 = await objectInstanceFixture.create(1);
    let listObjectInstance2 = await objectInstanceFixture.create(2);
    
    listAssociation.forEach(element => { associationModel.create(element, sqlHandler) })
    listCategory.forEach(element => { categoryModel.create(element, sqlHandler) })
    listObject.forEach(element => { objectModel.create(element, sqlHandler) })
    listStorage.forEach(element => { storageModel.create(element, sqlHandler) })

    listObjectInstance1.forEach(element => { objectInstanceModel.create(element, sqlHandler) })
    listObjectInstance2.forEach(element => { objectInstanceModel.create(element, sqlHandler) })
    res.send('ok');
}

function sqlHandler (err, res) {
    if (err) {
        throw err
    }
}