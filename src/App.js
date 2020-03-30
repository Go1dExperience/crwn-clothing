import React from 'react';
import './App.css';
//--Import Component----------------
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import Authentication from './pages/authentication/authentication.component';
//--Import Dependencies----------------
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={Authentication}></Route>
      </Switch>
    </div>
  );
}

export default App;
