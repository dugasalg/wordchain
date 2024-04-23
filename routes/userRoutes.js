// Routes for user registration and gameplay
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registrationrouter.post('/register', userController.register);

// TODO: Add gameplay routes

// Export the routes
module.exports = router;