const mongoose = require('mongoose');

let user = mongoose.model("users",{
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
        type: Number,
        required: true,
        default: 0
    },
    type: {
        type: String,
        enum: ["admin", "regularUser"],
        required: true,
        default: "regularUser"
    },
    lastlogin: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        enum: ["true", "false"],
        default: "true"

    }
});

module.exports = {
    user : user,
}
