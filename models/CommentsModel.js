const mongoose = require('mongoose');


const commentsSchema = mongoose.Schema({
    id_Val: mongoose.Schema.Types.ObjectId,
    user: {
        type: String,
        ref: 'Profile'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    comment: {
        type: String,
        required: true
    },
    created: {
        type: Boolean,
        default: false
    },
    // postID: {
    //     type: mongoose.Schema.Types.ObjectId,
    // }
})

module.exports = mongoose.model('Comment', commentsSchema);