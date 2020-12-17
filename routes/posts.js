const { Router } = require('express')
const verify = require('./verifyToken')
const User = require('../model/database/Users')


jwt = require('jsonwebtoken')

const router = Router()


router.get('/', verify, async (req, res) => {
    const user = await User.findOne({_id: req.user})

    

    res.send(user.email)
    console.log(user)
 
})








// router.post('/', (req, res) => {
//     res.header('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0MDA0ZWM1MTI0ZjEyMjk4YjM3ZjYiLCJpYXQiOjE2MDc4Mjc5MzV9.wRu3tpEU50-kCp043vNVy_flevmg9WIXq19AboXw908')
    
 
//})


// router.post('/', verify, async (req, res) => {
//     const user = await User
    
//     const token = jwt.sign({ _id: user.id }, process.env.ACCESS_TOKEN_SECRET)

//     // //add token to header (you can name header any name you want)
//     res.header('authToken', token).send(token)
//     //find post based on individual user
//     // whenever you see >TypeError: Converting circular structure to JSON USE await
   
  
  
// })



module.exports = router;