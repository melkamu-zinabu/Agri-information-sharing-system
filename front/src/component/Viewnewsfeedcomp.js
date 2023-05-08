import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalInfoList = () => {
  const [seasonalInfo, setSeasonalInfo] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    fetchSeasonalInfo();
  }, []);

  const fetchSeasonalInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getnews/');
      setSeasonalInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderDescription = (description) => {
    if (description.split(' ').length > 20) {
      const truncatedDescription = description.split(' ').slice(0, 20).join(' ');
      

      return (
        <div>
          <p>{expanded ? description : truncatedDescription}</p>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Collapse' : 'See More'}
          </button>
        </div>
      );
    }

    return <p>{description}</p>;
  };


  const handleDelete = (id) => {
    console.log('Deleting news item:', id);
    axios.delete(`http://localhost:3000/deletenews/${id}`)
      .then(res => {
        const updatedList = seasonalInfo.filter(news => news._id !== id);
        setSeasonalInfo(updatedList);
        console.log("updatedList");
      })
      .catch(err => console.log(err));
  };

 
  return (
    <div>
      <h2>Seasonal Informationmmm</h2>
      {seasonalInfo.slice(0, visibleCount).map((info) => (
        <div key={info._id}>
            <h4>{info.category}</h4>
          <h3>{info.title}</h3>
          {renderDescription(info.description)}
          <button onClick={() => handleDelete(info._id)}>Delete</button>
          <a href={`/update/${info._id}`}>Update</a>
          {/* Note that the "Update" functionality is not implemented within the ViewNews component itself. Instead, it redirects to a separate update page, which can have its own component responsible for updating the news item.
          */}
          
        </div>
      ))}
       {seasonalInfo.length > visibleCount && (
      <button onClick={() => setVisibleCount(visibleCount + 2)}>Read More</button>
    )}
      
    </div>
  );
};

export default SeasonalInfoList;
