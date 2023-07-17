import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ colors }) => {
  return (
    <nav>
      <NavLink exact to="/colors">
        Colors
      </NavLink>
      <NavLink to="/colors/new">Add Color</NavLink>
      {colors.map((color) => (
        <NavLink key={color.name} to={`/colors/${color.name}`}>
          {color.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;