import express from 'express';
import dotenv from 'dotenv';
import { connectToMongo } from './db/connection.js';
import { ErrorMiddleware } from './middlewares/error-handler.js';
import { notFoundMiddleware } from './middlewares/notFound.js';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
  throw new Error('error');
  res.send('Hello there');
});

app.use(notFoundMiddleware);
app.use(ErrorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectToMongo(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
