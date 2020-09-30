import React,{useState} from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Signin from './pages/signin/signin'
import Signup from './pages/signup/signup'

function App() {
  const [user,setUser] = useState(null);

   const fillUser = (userobject)=>{
    setUser(userobject);
  }
  
  return (
    <div className="App">
      {/* {<Home/>} */}
      <Switch>
        <Route path="/signup" >
          <Signup/>
        </Route>
        <Route path="/signin">
            <Signin fillUser={fillUser}/>
        </Route>
        <Route path="/">
            <Home user={user} fillUser={fillUser}/>
        </Route>   
      </Switch> 
    </div>
  );
}

export default App;
