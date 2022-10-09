const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserFriends = new Schema({
  user_id: {
    type: String
  },
  friend_id: {
    type: String
  },
}, {
  collection: 'user_friends'
})

module.exports = mongoose.model('UserFriends', UserFriends)