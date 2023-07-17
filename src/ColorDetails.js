import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h2>{selectedColor.name}</h2>
      <div style={{ backgroundColor: selectedColor.value, width: '200px', height: '200px' }}></div>
    </div>
  );
};

export default ColorDetails;
