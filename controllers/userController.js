// User controller for registration
const User = require('../models/User');

// Register user function
exports.register = async ((req, res) => {
    try {
        const user = new User({name: req.body.name});
        await user.save();
        res.json({userId: user._id, status: 'successful'});
    } catch (err) {
        res.status(500).json(err);
    }
});