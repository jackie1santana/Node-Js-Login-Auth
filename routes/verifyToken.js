const jwt = require('jsonwebtoken')

//add this to all private routes
module.exports = async (req, res, next) => {
   

    // FIGURE OUT HOW TO PASS AUTHORIZATION FROM LOGIN TO PROTECTED ROUTE
 
        // const user = User.findOne( { email: req.body.email  })
    
         
      if(!req.header('Authorization')) return next()

        const authHeader = req.header('Authorization')
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

       

        
        // console.log(token)
        //this has to be the id of the login user to pull post  from dataabase
        // token = jwt.sign({ _id: req.body.email === req.body._id }, process.env.ACCESS_TOKEN_SECRET)
        //401 is a resource we cannot access

        console.log('verified ' + token)


        if(!token) return res.status(401).send('Access Denied')
    
         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return next()
            }
            
            // WHEN EVER I USE BEARER TOKEN IN POSTMAN AUTH IS SENT TO console.log.BUT IF I DONT USE POSTMAN IT OWNT
            req.user = payload
            // res.status(200).send({
            //     decodedToken: payload,
            //     retrievedHeaderTokenfromBrowser: token
            // })

            console.log(payload) 
            // STRINGIFY THIS AND PASS THRU REQ
            console.log(payload._id)
next()
            
        })
        //verified variable returns the id number in user
       
       
      
        
   
        // res.status(401).send({err, error: 'Please Authenticate'})
     
}