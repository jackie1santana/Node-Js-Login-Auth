const mongoose = require('mongoose')
const { isEmail } = require('validator')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
   email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter valid email']
   },
   password: {
    type: String,
    required: [true, 'Please enter password'],
    
    // unique makes sure that no one else can sign up with the same user name
    minlength: [6, 'Minimum password length is 6 characters']
   }
})



userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)

    next()
})

// model is the name of the database collection
const User = mongoose.model('registered_users', userSchema)


module.exports = User