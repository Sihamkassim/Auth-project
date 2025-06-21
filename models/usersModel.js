const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: [true, "email must be unique"],
    minLength: [5, "Email must be at least 5 characters long"],
    maxLength: [50, "Email must be at most 50 characters long"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    select: false, // Exclude password from queries by default
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false, // Exclude verification code from queries by default
  },
  verificationCodeValidation: {
    type: Number,
    select: false,
  },
  forgotPasswordCode: {
    type: String,
    select: false, // Exclude forgot password code from queries by default
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false, // Exclude forgot password code validation from queries by default
  },

},{
    timestamps:true,
});
module.exports = mongoose.model("User", userSchema);