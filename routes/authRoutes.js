const { Router } = require('express')
const authController = require('../controller/authControllers')

const router = Router()

//HOME
router.get('/signup', authController.signup_get, () => {
    
})

router.post('/signup', authController.signup_post, () => {
   
}) 

router.get('/login', authController.login_get, () => {
    
})

router.post('/login', authController.login_post, () => {
   
})

router.get('/user', authController.user_get, () => {
    
})

router.post('/user', authController.user_post, () => {

})

router.get('/logout', authController.logged_out_get, () => {
    
})



module.exports = router


