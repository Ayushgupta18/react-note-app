import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Signin from './pages/signin/signin'
import Signup from './pages/signup/signup'

function App() {
  return (
    <div className="App">
      {/* {<Home/>} */}
      <Switch>
        <Route path="/signup" >
          <Signup/>
        </Route>
        <Route path="/signin">
            <Signin/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>   
      </Switch> 
    </div>
  );
}

export default App;
