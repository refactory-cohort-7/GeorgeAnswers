const mongoose = require('mongoose');

const connectDB = async () => {
  const connection = await mongoose.connect();
};
