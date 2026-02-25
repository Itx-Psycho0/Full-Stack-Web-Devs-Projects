const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { username, password, email, role="user" } = req.body;
    // Check if the user already exists
    const existingUser = await userModel.findOne({
        $or: [{ username }, { email }],
     });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const newUser = new userModel({ username, password: hashedPassword, email, role });
      const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      newUser.token = token;
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: "User registered successfully",
        user:{
            id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            role:newUser.role,
        } ,
        token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username,email, password } = req.body;
    // Find the user by username or email
    const user = await userModel.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    user.token = token;
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {registerUser, loginUser};