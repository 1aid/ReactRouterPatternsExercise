import React from 'react';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Welcome to the Dog Finder</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <p>Name: {dog.name}</p>
            <p>Age: {dog.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
