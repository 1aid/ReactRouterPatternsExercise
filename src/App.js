import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';

const App = () => {
  const [colors, setColors] = useState([]);

  const handleAddColor = (newColor) => {
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  return (
    <Router>
      <div>
        <Nav colors={colors} />
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route path="/colors/new">
            <ColorForm handleAddColor={handleAddColor} />
          </Route>
          <Route path="/colors/:color">
            <ColorDetails colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;