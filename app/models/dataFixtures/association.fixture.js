const Association = require('../association.model')
const FakerService = require('../../service/faker.service')

exports.create = async () => {
    let listName = await FakerService.post("Company Name").then(response => response.data.results);
    let res = [];
    for(let i = 0; i<listName.length; i++) {
        res.push(new Association({
            name: listName[i]
        }));
    }
    return res;
}
