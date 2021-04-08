const router = require('express').Router();

const object = require('../../controllers/object.controller')


router.get('/', function(req, res, next){
    return res.json({message : "Hello World"});
});

// Objets routes
router.post("/objects", object.create);
router.get("/objects", object.findAll);
router.get("/objects/:objectId", object.findOne);
router.put("/objects/:objectId", object.update);
router.delete("/objects/:objectId", object.delete);


module.exports = router;