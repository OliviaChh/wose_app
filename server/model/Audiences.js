const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Audiences = new Schema({
  tid: {
    type: String
  },
  uid: {
    type: String,
    unique: true
  },
  start_time: {
    type: String
  },
}, {
  collection: 'tutorial_audiences'
})

module.exports = mongoose.model('Audiences', Audiences)