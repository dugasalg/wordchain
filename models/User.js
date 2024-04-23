// User model for MongoDB
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

// Create user model and export it
const User = mongoose.model('User', userSchema);
export default User;