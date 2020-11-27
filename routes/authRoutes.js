const { Router } = require('express')
const authController = require('../controller/authControllers')

const router = Router()

//HOME
router.get('/signup', authController.signup_get, () => {
    res.send('sign up')
})

router.post('/signup', authController.signup_post, () => {
    
})

router.get('/login', authController.login_get, () => {
    res.send('login')
})

router.post('/login', authController.login_post, () => {
 
})

router.get('/loggedin', authController.logged_in_get, () => {
    res.send('logged in')
})

router.post('/loggedin', authController.logged_in_post, () => {
    res.send('login')
})

router.get('/logout', authController.logged_out_get, () => {
    res.send('logged out')
})



module.exports = router


