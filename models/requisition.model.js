const mongoose = require('mongoose');

let requisition = mongoose.model("Requisition", {
    requisitionDate: {
        type: String, //deve passar a Date
        required: true
    },
    returnDate: {
        type: String, //deve passar a Date
        required: true
    },
    itemCode: {
        type: Number,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    info: {
        type: String
    },
    state: {
        type: String,
        required: false,
        enum: ["active", "canceled"],
        default: "active"
    },
});

module.exports = {
    requisition: requisition,
}