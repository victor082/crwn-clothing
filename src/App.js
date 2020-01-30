import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage'
import ShopPage from './pages/Shop'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path="/shop/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
