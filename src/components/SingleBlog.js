import { Card } from './Card';
import { useNavigate } from 'react-router-dom';

export const SingleBlog = ({ title, description, image, _id }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blogs/${_id}`)}>
      <Card title={title} description={description} image={image} id={_id} />
    </div>
  );
};
