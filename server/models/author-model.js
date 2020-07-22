const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Author = new Schema(
    {
        vertex: { type: Number, required: true },
        degree: { type: Number, required: true },
        colaborators: { type: Number, required: true },
        name: { type: String, required: true },
        adj: { type: [Number], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('author', Author)
