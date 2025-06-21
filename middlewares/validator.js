const joi = require("joi");

// ✅ Signup Schema
exports.signupSchema = joi.object({
  email: joi
    .string()
    .min(5)
    .max(50)
    .email({ tlds: { allow: ["com", "net", "org"] } }) 
    .required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

// ✅ Signin Schema
exports.signinSchema = joi.object({
  email: joi
    .string()
    .min(5)
    .max(50)
    .email({ tlds: { allow: ["com", "net", "org"] } }) 
    .required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

// ✅ Accept Code Schema
exports.acceptCodeSchema = joi.object({
  email: joi
    .string()
    .min(5)
    .max(50)
    .email({ tlds: { allow: ["com", "net", "org"] } }) 
    .required(),
  providedCode: joi.number().required(),
});

// ✅ Change Password Schema
exports.changePasswordSchema = joi.object({
  newPassword: joi
    .string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  oldPassword: joi
    .string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

exports.acceptFPCodeSchema = joi.object({
  email: joi.string()
    .min(6)
    .max(60)
    .required()
    .email({
      tlds: { allow: ['com', 'net'] },
    }),
  providedCode: joi.number().required(),
  newPassword: joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
});

exports.createPostSchema = joi.object({
	title: joi.string().min(3).max(60).required(),
	description: joi.string().min(3).max(600).required(),
	userId: joi.string().required(),
});