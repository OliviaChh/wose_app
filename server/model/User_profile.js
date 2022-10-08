const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User_profile = new Schema({
  email: {
    type: String
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
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  goal: {
    type: Number
  },
}, {
  collection: 'user_profile'
})

module.exports = mongoose.model('User_profile', User_profile)