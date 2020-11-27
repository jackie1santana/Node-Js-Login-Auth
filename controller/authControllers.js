//User collections from database
//this file is required in server.js so that it is connected to mongoose
const User = require('../model/database/User')

//bring in database


const handleErrors = () => {

}

module.exports.signup_get = (req, res, next) => {
    res.send('signed up')
    User.create({ 
        email: 'sean3@aol.com',
        password: '123456'
     }, function (err, small) {
        if (err) return handleError(err);
        // saved!
      })
    console.log(' sign up get middleware')
    next()
}

module.exports.signup_post = (req, res, next) => {
    console.log('sign up post middleware')
    next()
}

module.exports.login_get = (req, res, next) => {
    console.log('login get middleware')
    next()
}

module.exports.login_post = (req, res, next) => {
    console.log('login post middleware')
    next()
}

module.exports.logged_in_get = (req, res, next) => {
    console.log('logged in get middleware')
    next()
}

module.exports.logged_in_post = (req, res, next) => {
    console.log('logged in post middleware')
    next()
}

module.exports.logged_out_get = (req, res, next) => {
    console.log('loggedout middleware')
    next()
}