import React from 'react';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Color Factory</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.name} style={{ backgroundColor: color.value }}>
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
