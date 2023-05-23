import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateNews = ({ match }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { id } = match.params;
      const response = await axios.get(`http://localhost:3000/getnews/${id}`);
      const { title, description, category } = response.data;
      setTitle(title);
      setDescription(description);
      setCategory(category);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { id } = match.params;
      const updatedNews = { title, description, category };
      await axios.put(`https://red-angry-lovebird.cyclic.app/updatenews/${id}`, updatedNews);
      // Handle success, e.g., show a success message or redirect to the news list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update News</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateNews;
