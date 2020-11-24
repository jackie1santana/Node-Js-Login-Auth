const express = require('express')
const Router = require('./controller/routes/routes')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(Router)

app.listen(PORT, () => {
    console.log(`REST api server running on port ${PORT}`)
})
