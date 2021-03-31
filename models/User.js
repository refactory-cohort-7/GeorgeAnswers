const mongoose = require('mongoose');
const passport = require('passport');

const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: 'Please Enter User name' },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
