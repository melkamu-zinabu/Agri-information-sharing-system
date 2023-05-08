import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const addNews = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/addnews', {
        title: newTitle,
        description: newDescription,
        category: newCategory,
      });
      console.log(response.data)
      setNewTitle('');
      setNewDescription('');
      setNewCategory('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add News</h2>
      <form
        onSubmit={addNews}
        
      >
        <label>Title:</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <label>Category:</label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <button type="submit">Add News</button>
      </form>
    </div>
  );
};

export default AddNews;
