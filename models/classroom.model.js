const mongoose = require('mongoose');

let classroom = mongoose.model("Classroom",{
    name: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        require: true,
        enum: ["Available", "Not available"]
    }
});

module.exports = {
    classroom : classroom,
}