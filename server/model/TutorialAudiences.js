const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorialAudiences = new Schema({
  _id: {
    type: String
  },
  tid: {
    type: String
  },
  uname: {
    type: String
  },
  start_time: {
    type: String
  },
}, {
  collection: 'tutorial_audiences'
})

module.exports = mongoose.model('TutorialAudiences', TutorialAudiences)