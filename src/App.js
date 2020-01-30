import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shop.js'


function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path="/shop/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
