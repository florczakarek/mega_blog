import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.js';
import blogRouter from './routes/blog.js';
import { connectToMongo } from './db/connection.js';
import { ErrorMiddleware } from './middlewares/error-handler.js';
import { notFoundMiddleware } from './middlewares/notFound.js';

const app = express();
dotenv.config();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use('/api', userRouter);
app.use('/api/blogs', blogRouter);

app.use(notFoundMiddleware);
app.use(ErrorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    connectToMongo(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
