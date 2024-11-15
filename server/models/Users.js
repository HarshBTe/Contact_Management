const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
     FirstName: String,
     LastName: String,
     Email: String,
     PhoneNumber: String,
     Company: String,
     JobTitle: String
})

const UserModel = mongoose.model("contacts", UserSchema)
module.exports = UserModel