import React, { useState } from 'react';
import Linechartd from './Linechartd';

const CropSelectionComponent = () => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  return (
    <div>
      <h2>Select Crop</h2>
      <select value={selectedCrop} onChange={handleCropChange}>
        <option value="">Select Crop</option>
        <option value="Corn">Corn</option>
        <option value="teff">teff</option>
        <option value="Bean">Bean</option>
      </select>
  
      {selectedCrop && <Linechartd cropName={selectedCrop} />}
    </div>
  );
};

export default CropSelectionComponent;
