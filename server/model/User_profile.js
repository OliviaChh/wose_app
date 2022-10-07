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
<<<<<<< HEAD
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
=======
  avatar: {
    type: String
  }
>>>>>>> 191761e96686a3c794b96be04c73d8cef099bdde
}, {
  collection: 'user_profile'
})

module.exports = mongoose.model('User_profile', User_profile)