const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        const appID = decodedToken.appID;

        if(req.body.appID && req.body.appID !== appID){
            throw 'Invalid APP ID';
        }else{
            next();
        }
    } catch{
        res.status(401).json({
            error: '401 Unauthorized'
        })
    }
}