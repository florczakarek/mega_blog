import axios from 'axios';
import { useEffect, useState } from 'react';
import { SingleBlog } from '../components/SingleBlog';

export const Blogs = () => {
  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          const { _id } = blog;
          return <SingleBlog key={_id} {...blog} />;
        })}
    </div>
  );
};
