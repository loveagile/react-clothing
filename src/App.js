import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from "./components/header/Header";
import ShopPage from './pages/shop/ShopPage';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}


export default App;
