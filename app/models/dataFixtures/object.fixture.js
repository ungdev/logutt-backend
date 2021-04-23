const Object = require('../object.model')
const FakerService = require('../../service/faker.service')

exports.create = async () => {
    let listName = await FakerService.post("Product").then(response => response.data.results); 
    let listDescription = await FakerService.post("Product Description").then(response => response.data.results); 
    let listLendable = await FakerService.post("Boolean").then(response => response.data.results); 
    let res = [];
    for(let i = 0; i<listName.length; i++) {
        res.push(new Object({
            name: listName[i],
            description: listDescription[i],
            lendable: listLendable[i]
        }));
    }
    return res;
}