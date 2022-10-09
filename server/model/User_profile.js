const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let User_profile = new Schema({
  email: {
    type: String,
    unique: true
  },
  uname: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  goal: {
    type: Number
  },
  avatar: {
    type: String
  },
}, {
  collection: 'user_profile'
})

User_profile.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User_profile', User_profile);