import Blog from '../models/Blog.js';

export const getAll = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ messsage: 'No founded blogs' });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const newBlog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    newBlog.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ newBlog });
};

export const updateBlog = async (req, res, next) => {
  const blogId = req.params.id;
  const { title, description } = req.body;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, { title, description });
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ messsage: 'You cannot update this blog' });
  }
  return res.status(200).json({ blog });
};

export const getSingleBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res
      .status(404)
      .json({ messsage: 'There is no such an ID of blog ' });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ messsage: 'Unable to delete' });
  }
  return res.status(200).json({ messsage: 'Deleted with success' });
};
