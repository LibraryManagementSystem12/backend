const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({error: 'User does not exist'});
        }
        const isMatch = await userService.compareUserPassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({error: 'Invalid password'});
        }
        // Only return the username, userId, and accountType
        const returnUser = {
            username: user.firstName + " " + user.lastName,
            userId: user._id,
            accountType: user.userType
        };
        res.json(returnUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.editUser = async (req, res) => {
    console.log(req.body);
    try {
        const updatedUser = await userService.editUser(req.params.userId, req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.userId);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { newpassword } = req.body;
        const user = await userService.resetPassword(req.params.userId, newpassword);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getTotalUsers = async (req, res) => {
    try {
        const totalUsers = await userService.getTotalUsers();
        res.json({totalUsers});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRecentlyAddedUsers = async (req, res) => {
    try {
        const recentUsers = await userService.getRecentlyAddedUsers();
        res.json(recentUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
