const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tutorials = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  coach: {
    type: String
  },
  time: {
    type: String
  },
  calories: {
    type: String
  },
  videoUrl: {
    type: String
  },
  smallImageUrl: {
    type: String
  },
  bigImageUrl: {
    type: String
  }
}, {
  collection: 'tutorials'
})

module.exports = mongoose.model('Tutorials', Tutorials)