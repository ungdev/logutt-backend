const Category = require('../category.model')
const FakerService = require('../../service/faker.service')

exports.create = async () => {
    let listName = await FakerService.post("Product Material").then(response => response.data.results);
    let res = [];
    for(let i = 0; i<listName.length; i++) {
        res.push(new Category({
            name: listName[i]+"UTT"
        }));
    }
    return res;
}
