const express = require('express')
const Router = require('./routes/authRoutes')
require('dotenv').config()
const mongoose = require('mongoose');
require('./controller/authControllers')
const ejs = require('ejs')

const app = express()

const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(Router)

//Database has to be running in order for the local server to work

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT, () => {
    console.log(`REST api server running on http://localhost:${PORT}/ | Database is connected`)
}))
  .catch((err) => console.log(err));

// routess

//HOME
app.get('/', (req, res, next) => {
    res.send('Express')
    next()
})


