const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date
})

const model = mongoose.model('Messages', schema)

module.exports = model
