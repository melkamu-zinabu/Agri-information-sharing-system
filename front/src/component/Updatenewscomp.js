import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateNews = ({ match }) => {
  const [news, setNews] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getnews/${match.params.id}`);
      setNews(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    const updatedNews = {
      title,
      description,
    };

    axios
      .put(`http://localhost:3000/updatenews/${match.params.id}`, updatedNews)
      .then((res) => {
        console.log('News updated successfully');
        // Handle any necessary UI updates or redirect to the news list page
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update News</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateNews;
