import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchAddForm = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/blogs/add', {
        title: form.title,
        description: form.description,
        image: form.image,
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAddForm().then((data) => setForm(data));
    navigate('/blogs');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <h2>Post your blog</h2>
        <label htmlFor=''>Title</label>
        <input
          onChange={handleChange}
          name='title'
          value={form.title}
          type='text'
          placeholder='Add your title'
        />
        <label htmlFor=''>Description</label>
        <input
          onChange={handleChange}
          name='description'
          value={form.description}
          type='text'
          placeholder='Description goes here'
        />
        <label htmlFor=''>ImageURL</label>
        <input
          onChange={handleChange}
          name='image'
          value={form.image}
          type='text'
          placeholder='Paste your imageURL'
        />
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </div>
    </form>
  );
};
