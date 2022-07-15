import mongoose from 'mongoose';

export const connectToMongo = (url) => {
  return mongoose.connect(url);
};
