import React from "react";
import mainLogo from'./Components/Logo2.png';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
function App(){

return(

<div>
 <Router>
        <Navbar />
        <Switch>
         {/*  <Route path='/' exact component={SignUp} />
          */}   <Route path='/home'  component={Home} />
     {/*        <Route path='/products' component={Products} /> 
      */}    </Switch>
      </Router>
 
<img src= {mainLogo} alr = {"logo"}/>

</div>
);
}

export default App;
