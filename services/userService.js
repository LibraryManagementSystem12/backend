const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = (userData) => {
    const newUser = new User(userData);
    return newUser.save();
};

exports.findUserByEmail = (email) => {
    return User.findOne({email: email});
};

exports.compareUserPassword = (inputPassword, userPassword) => {
    return bcrypt.compare(inputPassword, userPassword);
};

exports.editUser = (userId, userData) => {
    return User.findByIdAndUpdate(userId, userData, { new: true });
};

exports.deleteUser = (userId) => {
    return User.findByIdAndDelete(userId);
};

exports.resetPassword = (userId, newpassword) => {
    return User.findById(userId)
        .then(user => {
            user.password = newpassword;
            return user.save();
        });
};


exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.getTotalUsers = async () => {
    return await User.countDocuments({});
};

exports.getRecentlyAddedUsers = async () => {
    return await User.find().sort({created_at: -1}).limit(5);
};
