const { validationResult } = require("express-validator");
const { Login, Signup, Password } = require("../utils/authUtils");
const transporter = require("../utils/mails");

const loginController = async (req, res) => {

  const err = validationResult(req);

  if (!err.isEmpty())  {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  try {
    const { email, password } = req.body;

    const login = new Login(email, null, password);

    const isEmailExists = await login.checkIfEmailExists(); 

    if (!isEmailExists) {
      return res.status(401).json({
        message: "check your email"
      });
    }

    const validatePassword = await login.verifyPassword(password);

    if (!validatePassword)  {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    const user = await login.getUserinfo();

    delete login;

    return res.status(200).json({
      message: "Login successful",
      user
    });
  }
  catch (e) {
    return res.status(400).json({
      message: e.message
    });
  }
}

const signupController = async (req, res) => {

  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(401).json({
      message: "Check your fields",
    });
  }

  try {
    const { email, password, phone, name } = req.body;

    const signup = new Signup(name, email, phone, password);

    const isEmailExists = await signup.checkIfEmailExists();

    if (isEmailExists) {
      return res.status(401).json({
        message: "Email already exists"
      });
    }

    const isPhoneExists = await signup.checkIfPhoneExists();

    if (isPhoneExists) {
      return res.status(401).json({
        message: "Phone number already exists"
      });
    }

    await signup.createUser();

    delete signup;

    return res.status(201).json({
      message: "User Creates successfully"
    });
  }
  catch (e) {
    return res.status(400).json({
      message: e.message
    });
  }
}

const resetPasswordController = async (req, res) => {
  const err = validationResult(req);

  if (!err.isEmpty())  {
    res.status(401).json({
      message: "Invalid email"
    });
  }

  try {
    const { email, password: newPassword } = req.body;

    const password = new Password(email, newPassword);

    const isEmailExists = await password.checkIfEmailExists();

    if (!isEmailExists) {
      return res.status(401).json({
        message: "check your email"
      });
    }

    await password.resetPassword();

    const mailOptions = {
      from: `${process.env.EMAIL_ADDRESS}`,
      to: 'sowago6286@laserlip.com',
      subject: 'Password',
      text: 'Your password has been changed',
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err.message);
      }
      else {
        console.log('Email sent: ' + info.response);
      }
    })

    delete password;

    return res.status(200).json({
      message: "Password reset successful",
    })
  }
  catch (e) {
    return res.status(400).json({
      message: e.message
    })
  }
}

module.exports = {
  loginController,
  signupController,
  resetPasswordController
}