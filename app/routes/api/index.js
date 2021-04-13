const router = require('express').Router();

const object = require('../../controllers/object.controller')
const category = require('../../controllers/category.controller')


router.get('/', function(req, res, next){
    return res.json({message : "Welcome to LogUTT"});
});

// Objets routes
router.post("/objects", object.create);
router.get("/objects", object.findAll);
router.get("/objects/:objectId", object.findOne);
router.put("/objects/:objectId", object.update);
router.delete("/objects/:objectId", object.delete);

// Categories routes
router.post("/categories", category.create);
router.get("/categories", category.findAll);
router.get("/categories/:categoryId", category.findOne);
router.put("/categories/:categoryId", category.update);
router.delete("/categories/:categoryId", category.delete);

module.exports = router;