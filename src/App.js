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
        <Route path='/Home' exact components={Home} />
        <Route path='/reports' exact components={Reports} />
        <Route path='/products' exact components={Products} />
      </Switch>
    </Router>
  );
}

export default App;
