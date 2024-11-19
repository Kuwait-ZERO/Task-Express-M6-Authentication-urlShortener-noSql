const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = await User.create({
      email: req.body.email,
      password: hashPassword,
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("urls");
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};
