const Storage = require('../storage.model')
const FakerService = require('../../service/faker.service')

exports.create = async () => {
    let listIdentifier = await FakerService.post("Last Name").then(response => response.data.results); 
    let listDescription = await FakerService.post("Number").then(response => response.data.results); 
    let res = [];
    for(let i = 0; i<listIdentifier.length; i++) {
        res.push(new Storage({
            name: listIdentifier[i],
            room: listDescription[i],
        }));
    }
    return res;
}