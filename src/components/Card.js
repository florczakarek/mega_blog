import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Card = ({ title, description, image, id }) => {
  const navigate = useNavigate();

  const fetchDeleteBlog = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    fetchDeleteBlog()
      .then((data) => console.log(data))
      .then(() => navigate('/landing'));
  };

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt='card blog' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>
          <p>{description}</p>
        </div>
      </div>
      <div className='card-btn'>
        <button className='edit-btn login-btn'>Edit</button>
        <button onClick={handleDelete} className='login-btn delete'>
          Delete
        </button>
      </div>
    </div>
  );
};
