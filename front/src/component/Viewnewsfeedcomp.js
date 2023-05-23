import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalInfoList = () => {
  const [seasonalInfo, setSeasonalInfo] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');

  

  useEffect(() => {
    fetchSeasonalInfo();
  }, [searchTerm, filterTerm]);

  const fetchSeasonalInfo = async () => {
    try {
      const response = await axios.get('https://red-angry-lovebird.cyclic.app/getnews/', {
        params: {
            search: searchTerm,
            filter: filterTerm,
            startDate: startDateFilter,
            endDate: endDateFilter,
        },
      });
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
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
  };

  const handleFiltercategoryChange = (event) => {
    setFilterTerm(event.target.value);
    
  };
  const handleStartDateChange = (event) => {
    setStartDateFilter(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDateFilter(event.target.value);
  };
 
  return (
    <div>
        <div>
        <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterTerm} onChange={handleFiltercategoryChange}>
          <option value="weather">Weather</option>
          <option value="crops">Crops</option>
          <option value="agriTech">Agriculture Technology</option>
          <option value="governmentPolicy">Government Policy</option>
        </select>
      </div>
      <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDateFilter}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDateFilter}
            onChange={handleEndDateChange}
          />
        </div>
        </div>















      <h2>Seasonal Informationmmm</h2>
      {seasonalInfo.slice(0, visibleCount).map((info) => (
        <div key={info._id}>
            <h4>{info.category}</h4>
          <h3>{info.title}</h3>
          {renderDescription(info.description)}
          <button onClick={() => handleDelete(info._id)}>Delete</button>
          <a href={`/update/${info._id}`}>Update</a>
          {/* Note that the "Update" functionality is not implemented within the ViewNews component itself. Instead, it redirects to a separate update page, which can have its own component responsible for updating the news item.
             // we have to use as follow in app.js
             
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
