const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    accountUrl: String,
    username: {
        type: String,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: true
    },
    iv: String, // For encryption
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Account', accountSchema);