const mongoose = require('mongoose');

// This defines what a User looks like in our database
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // No two users can have same email
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    inactivityPeriod: {
        type: Number,
        default: 30 // 30 days
    },
    isDeceased: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;