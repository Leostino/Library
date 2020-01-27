const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const LibrarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    publisher: {
        type: String,
        trim: true,
        required: true
    },
    published_date : {
        type: Date,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true            
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    maturity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    purchase_link: {
        type: String,
        required: true
    },
    read_link: {
        type: String,
        required: true
    }
});


const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
