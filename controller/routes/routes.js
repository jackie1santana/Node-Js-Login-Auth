const express = require('express')
const router = new express.Router()

router.get('/', (req, res, next) => {
    res.send('Express')
    next()
})

module.exports = router


