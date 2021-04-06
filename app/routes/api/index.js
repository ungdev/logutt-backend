const router = require('express').Router();

router.get('/', function(req, res, next){
    
    return res.json({message : "Hello World"});
});


module.exports = router;