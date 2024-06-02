const db = require('../models/dbConnect');
const createError = require('http-errors');
const { signAccessToken } = require('../helpers/jwtHelper');
const { authSchema } = require('../helpers/validateSchema');
const { invalid } = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.user;

const addUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'An error occurred while creating the user' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
};

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the user profile' });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'An error occurred while updating the user profile' });
    }
};

module.exports = {
    addUser,
    getAllUsers,
    loginUser,
    getUserProfile,
    updateUserProfile
};
