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
    item: [{
        code: {
            type: Number,
            required: true,
            unique: true
        },
        itemState: {
            type: String,
            required: false,
            enum: ["excelente", "bom", "mau", "péssimo"],
        },
    }],
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
