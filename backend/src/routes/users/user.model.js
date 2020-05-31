const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateToken = () => {
  const payload = { id: this._id };
  const token = jwt.sign(payload, process.env.APP_SECRET, {
    expiresIn: '7d',
  });

  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
