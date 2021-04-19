const mongoose = require('mongoose');
const passport = require('passport');

const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'User Name is required.'],
  },
  role: {
    type: String,
    required: [true, 'Please select Role.'],
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
