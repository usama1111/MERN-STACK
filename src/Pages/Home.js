

import React from 'react'
import { auth } from '../firebase'
import Navbar from '../Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Home1 from './Home1';

const Home = () => {
    return (
   <div>
     <div>
        <Router>
   
     <Navbar/>
     
     <Route path='/home'  component={Home1} />
   <Route path='/about'  component={About} />
  
</Router>

</div>
 
</div>
);
}


export default Home 