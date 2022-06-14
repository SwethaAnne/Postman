var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    user_id: mongoose.SchemaTypes.ObjectId
});

module.exports = mongoose.model("Post", postSchema);