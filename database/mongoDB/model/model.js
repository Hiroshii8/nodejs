const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const biodataSchema = new Schema({
    name: {
        type: String,
        default: 'Hiroo'
    },
    age: {type: Number},
    bio: {
        type: String,
        match: /[a-z]/
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Biodata', biodataSchema);
