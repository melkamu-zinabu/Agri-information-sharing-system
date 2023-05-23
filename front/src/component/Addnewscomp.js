import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [image, setImage] = useState(null);

  const addNews = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newTitle);
    formData.append('description', newDescription);
    formData.append('category', newCategory);
    formData.append('image', image);
  
   // http://localhost:3000/
    try {
      const response = await axios.post('  http://localhost:3000/addnews',formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data)
      // Clear form fields after successful submission
      setNewTitle('');
      setNewDescription('');
      setNewCategory('');
      setImage(null);
      // Optional: Show success message or redirect to news feed page
    } 
    catch (error) {
      // Handle error, e.g. show error message to user
      console.log(error);
    }
  }
  return (
    <form onSubmit={addNews}>
      <label>
        Title:
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNews;
