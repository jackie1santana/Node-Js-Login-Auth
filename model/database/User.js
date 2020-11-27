const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter email'],
        // unique makes sure that no one else can sign up with the same user name
        unique: true,
        lowercase: true,
        // this makes sure that it enters in only emails using a function  isEmail. the validator package
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        
        // unique makes sure that no one else can sign up with the same user name
        minlength: [6, 'Minimum password length is 6 characters']
    }
})

// model is the name of the database collection
const User = mongoose.model('registered_users', userSchema)



module.exports = User