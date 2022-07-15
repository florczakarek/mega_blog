import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: 'No users found' });
  }
  return res.status(200).json({ users });
};

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }

  if (existingUser) {
    res.status(404).json({ message: 'User email already exists' });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashPassword,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return res
      .status(404)
      .json({ message: 'Couldnt find user email . Try register first' });
  }

  const checkedPassword = await bcrypt.compare(password, user.password);

  if (!checkedPassword) {
    return res.status(400).json({ message: 'Incorect password' });
  }
  return res.status(201).json({ message: 'Successfully logged in' });
};
