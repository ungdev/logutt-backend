const ObjectInstance = require('../objectInstance.model')
const FakerService = require('../../service/faker.service')

exports.create = async (id) => {
    let listIdentifier = await FakerService.post("Product Adjective").then(response => response.data.results); 
    let listDescription = await FakerService.post("Product Description").then(response => response.data.results); 
    let listState = await FakerService.post("Boolean").then(response => response.data.results); 
    let listDeposit = await FakerService.post("Number").then(response => response.data.results); 
    let res = [];
    for(let i = 0; i<listIdentifier.length; i++) {
        res.push(new ObjectInstance({
            identifier: listIdentifier[i],
            description: listDescription[i],
            state: listState[i],
            deposit: listDeposit[i],
            object_id: id,
            association_id: id,
            storage_id: id,
        }));
    }
    return res;
}