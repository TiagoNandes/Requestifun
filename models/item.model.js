const mongoose = require('mongoose');

let item = mongoose.model("Item",{
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        required: true,
        enum: ["Available", "Not available"]
    },
    model: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String
    },
    urlImage: {
        type: String,
        default: "http://www.central3.com.br/wp-content/themes/c3/img/default-placeholder.png"
    }
});

module.exports = {
    item : item,
}