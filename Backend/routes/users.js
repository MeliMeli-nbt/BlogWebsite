var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/private");
const { verifyToken } = require("../middleware/verifyToken");
const UserGroup = require("../models/UserGroup");
const Group = require("../models/Group");
const User = require('../models/User');

/* GET users listing. */
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Kiểm tra xem username đã tồn tại hay chưa
    const existingUsername = await User.findOne({
      where: {
        username: username,
      },
    });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Kiểm tra xem email đã tồn tại hay chưa
    const existingEmail = await User.findOne({
      where: {
        email: email,
      },
    });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Kiểm tra password
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character (@#$%^&+=)" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Tạo người dùng mới và lưu vào CSDL
    await User.build({
      username: username,
      email: email,
      password: hash,
    }).save();

    // Gửi thông tin là đã tạo thành công 
    res.status(201).json({ message: "Account has been created successfully" });
  } catch (err) {
    res.json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (user) {
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const payload = {
            username,
            user_id: user.id,
            role: user.role,
          };
          const token = jwt.sign(payload, config.privateKey, {
            expiresIn: config.expiresIn,
          });
          res.status(200).json({ token });
        } else {
          res.status(401).json({ msg: "Invalid password" });
        }
      });
    } else {
      res.status(401).json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
