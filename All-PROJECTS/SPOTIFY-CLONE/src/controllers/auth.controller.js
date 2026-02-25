const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    // Check if the user already exists
    const existingUser = await userModel.findOne({
        $or: [{ username }, { email }],
     });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      // Create a new user
      const newUser = new userModel({ username, password, email, role });
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

module.exports = registerUser;