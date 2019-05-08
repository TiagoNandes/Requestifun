const mongoose = require('mongoose');

let requisition = mongoose.model("Requisition",{
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
    requisition : requisition,
}