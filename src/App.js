import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact components={Home} />
        <Route path='/reports' components={Reports} />
        <Route path='/products' components={Products} />
      </Switch>
    </Router>
  );
}
function home() {
  return <img src="https://evolutionfinancialplanning.co.uk/wp-content/uploads/2014/08/back-to-school.jpg" alt="Italian Trulli" />;
}

function reports() {
  return <h2>About</h2>;
}
function products() {
  return <h2>Users</h2>;
}
export default App;
