

import React from 'react'
import { auth } from '../firebase'
import Navbar from '../Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Home1 from './Home1';
import FormPage from './ContactUs';
const Home = () => {
    return (
   <div>
     <div>
        <Router>
   
     <Navbar/>
     
     <Route path='/' exact  component={Home1} />
   <Route path='/about'  component={About} />
   <Route path='/support'  component={FormPage} />
  
</Router>

</div>
 
</div>
);
}


export default Home 