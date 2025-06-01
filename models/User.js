const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  oauthProvider: String,
  oauthId: String,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);