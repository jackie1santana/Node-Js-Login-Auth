const express = require('express')
const Router = require('./routes/authRoutes')
const postRoute = require('./routes/posts')
require('dotenv').config()
const mongoose = require('mongoose');
require('./controller/authControllers')
const cookieParser = require('cookie-parser')


const app = express()

const PORT = process.env.PORT

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.set('view engine', 'ejs');

app.use(Router)
app.use('/user/api/posts', postRoute)

//Database has to be running in order for the local server to work


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(PORT, () => {
    console.log(`REST api server running on http://localhost:${PORT}/ | Database is connected`)
}))
  .catch((err) => console.log(err));
 
// routes

//HOME
app.get('/', (req, res) => {
  res.render('landingPage', {
    user: 'jackie'
  })
  

  
})



