import express from 'express';
import {
  addBlog,
  deleteBlog,
  getAll,
  getSingleBlog,
  updateBlog,
} from '../controllers/blog.js';

const router = express.Router();

router
  .get('/', getAll)
  .get('/:id', getSingleBlog)
  .post('/add', addBlog)
  .put('/update/:id', updateBlog)
  .delete('/:id', deleteBlog);

export default router;
