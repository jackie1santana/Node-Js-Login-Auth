//User collections from database
//this file is required in server.js so that it is connected to mongoose
const User = require('../model/database/Users')
//bring in database
jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const handleErrors = () => {

}





// //verify jsonwebtoken FOR LOGIN
// const requireAuth = async (req, res, next) => {
//     const authHeader = req.headers['authorization']

//     const token = authHeader && authHeader.split(' ')[1]

//     if(token === null) return res.sendStatus(401)
    
//     //if token is the same as the secret then log in
//     await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }




module.exports.signup_get = (req, res, next) => {
    res.render('signup')
    
    
   
}

module.exports.signup_post = async (req, res, next) => {
    const user = new User(req.body)
   try{
   
   
    // const user = await User.findOne( { email: req.body.email})
  
 
   

     const token = await jwt.sign({ _id: user._id}, process.env.ACCESS_TOKEN_SECRET)

     await user.save()
    
     
        console.log(user)

     const emailExist = await User.findOne( { email: req.body.email  })
     if (emailExist) return res.status(400).send('email already exist')
 
       
     await res.status(201).send(user)
    //  .redirect('/user')

     console.log('sign up post')
    next()
   }
   catch(err){
        res.sendStatus(403)
        console.log(err)
        
   }

}

module.exports.login_get = (req, res, next) => {
    res.render('login')

  
}

module.exports.login_post = async (req, res, next) => {
    
    const user = await User.findOne( { email: req.body.email})

    //check if the database has the email
    if (!user) return res.status(400).send('email or password is incorrect')
    
    //check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('email or password is incorrect')

    //create token
    // generateToken(user._id), httpOnly:true
    const token = jwt.sign({ _id: user.id }, process.env.ACCESS_TOKEN_SECRET)

    // add token to header (you can name header any name you want)
  
    
try {
   if(user){


    // fetch('/user/api/posts', { 
    //     method: 'post', 
    //     headers: new Headers({
    //       'Authorization': 'Bearer '+btoa('username:password'), 
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }), 
    //     body: 'A=1&B=2'
    //   });
    
    return res.status(200).cookie('authCookie', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly:true }).send({
        user,
        token,
        authCookiesSentToBrowser: req.cookies.authCookie
    })
    
   }

  next()
    // await res.redirect('/')
    
    

}catch(err){
   
    console.log(err)
}
   
next()
    
}

module.exports.user_get = async (req, res, next) => {
    // const bearerHeader = await req.headers['authorization']
    
    res.render('signupSuccess')
    // console.log(bearerHeader)
    next()
}

module.exports.user_post = async (req, res, next) => {

    

    // const bearer = await bearerHeader.split(' ')
    // const bearerToken = await bearer[1]

    // bearerToken = bearerToken.splice(1,1, 2300)

    
   
    
    // console.log(bearerHeader)
    
    // console.log('logged in post middleware')
   
    next()
}

module.exports.logged_out_get = (req, res, next) => {
    res.render('landingPage')
    console.log('loggedout middleware')
    next()
}