import React, { useEffect, useState } from 'react';
import LineChart from './Linechart'
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import { format } from 'timeago.js'


const CropDataComponent = ({ cropName }) => {
  const [cropData, setCropData] = useState([]);
//(`http://localhost:3000/marketdata/crop-data/${cropName}`)
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/marketdata/crop-data/${cropName}`); // Replace 'yourCropName' with the desired crop name
        const data = await response.json();
        setCropData(data);
        console.log(data);
      } catch (error) {
        console.log("eyamemew");
        console.error('Error fetching crop data:', error);
      }
    };
    fetchData();
  }, [cropName]);
  
 
    const labels = cropData.map(item => format(item.date)); // Assuming the date property exists in the crop data
    const values = cropData.map(item => item.price); // Assuming the value property exists in the crop data
  
    const data = {
        datasets: [
            {
              label: 'Crop Data',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        labels,
       
      };
  
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

  

  return (
    <div style={{ width: 700 }}>
    <h2>Crop Data Bar Graph</h2>
    <LineChart chartData={data} options={options} />
  </div>
  );
};

export default CropDataComponent;
