const mongoose = require('mongoose');

const nomineeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    accessibleAccounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Nominee', nomineeSchema);