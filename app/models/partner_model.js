const sql = require("./db.js");

// constructor
const Partner = function (partner) {
    this.id = partner.id;
    this.title = partner.title;
    this.description = partner.description;
    this.image = partner.image;
};


Partner.allPartners = function (result) {

    sql.query("SELECT * from partner", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                
             result(null, res);
            }
        });   
};


module.exports = Partner;