var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);