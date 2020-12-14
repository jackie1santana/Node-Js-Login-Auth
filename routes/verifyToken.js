const jwt = require('jsonwebtoken')

//add this to all private routes
module.exports = function (req, res, next){
    const token = req.header('authToken')
    //401 is a resource we cannot access
    if(!token) return res.status(401).send('Access Denied')

    try{
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        //verified variable returns the id number in user
       
       req.user = verified
        next()
    }catch(err){
        res.status(400).send('invalid token')
    }
}