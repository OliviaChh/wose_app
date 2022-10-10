const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Foods = new Schema({
    foodname: {
        type: String
    },
    calorie: {
        type: Number
    }
}, {
    collection: 'foods'
})

module.exports = mongoose.model('Foods', Foods)