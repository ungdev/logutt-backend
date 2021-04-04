const router = require('express').Router();
const auth = require('../../middleware/auth')


router.get('/', auth, function(req, res, next){
    
    return res.json({message : "Hello World"});
});


module.exports = router;