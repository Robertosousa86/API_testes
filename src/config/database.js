import mongoose from 'mongoose';
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URL || 'localhost/test';

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//const close = () => mongoose.connection.close();

export default {
  connect,
  connection: mongoose.connection,
};
