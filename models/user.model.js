const mongoose = require('mongoose');

let user = mongoose.model("User",{
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlenght: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    points: {
        type: Int16Array
    },
    type: {
        type: String,
        enum: ["admin", "regularUser"],
        required: true
    },
    lastlogin: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = {
    user : user,
}