const { Router } = require('express')
const verify = require('./verifyToken')
const User = require('../model/database/Users')



const router = Router()


router.get('/', verify, async (req, res) => {
    

    //find post based on individual user
    // whenever you see >TypeError: Converting circular structure to JSON USE await
    const user = await User.findOne({_id: req.user})
    
    // SHOW SPECIFIC POST BASED ON SUER
   res.send(user.email)
})



module.exports = router;