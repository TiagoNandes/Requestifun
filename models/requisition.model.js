const mongoose = require('mongoose');

let requisition = mongoose.model("Requisition", {
    requisitionDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    itemCode: {
        type: Int16Array,
        required: true,
        unique: true
    },
    amount: {
        type: Int16Array,
        required: true
    },
    info: {
        type: String
    }
});

module.exports = {
    requisition: requisition,
}