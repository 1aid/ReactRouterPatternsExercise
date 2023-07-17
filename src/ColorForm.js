import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = ({ handleAddColor }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = { name, value };
    handleAddColor(newColor);
    setName('');
    setValue('');
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Color Value:
        <input type="color" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <button type="submit">Add Color</button>
    </form>
  );
};

export default ColorForm;