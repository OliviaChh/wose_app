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
  avatar: {
    type: String
  }
}, {
  collection: 'user_profile'
})

module.exports = mongoose.model('User_profile', User_profile)