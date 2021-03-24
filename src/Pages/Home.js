//import React from 'react'
 //import { auth } from '../firebase'
/* 
const Home = () => {
    return (

<div>      
<div>
 <Router>
        <NavBar />
        <Switch>
     
          <Route path='/'  component={Home} />
             <Route path='/signout' component={SignIn} /> 
            
           </Switch>
      </Router>

 </div>

 
        <div>


             <p><button onClick={() => auth.signOut()}>Sign out</button></p>
     
    
        </div>
     </div> 
    )
}
 */  

import React from 'react'
import { auth } from '../firebase'
import Navbar from '../Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import App from '../App';
const Home = () => {
    return (
      
       <div>       
               <div>
 <Router>
        <Navbar />
        
  <Route path='/' component={App} >
   
    <Route path='/about' component={About} />
  </Route>
  <Route path='*' component={"NotFound"} />
</Router>


            <h1>Welcome home</h1>
            <p><button onClick={() => auth.signOut()}>Sign out</button></p>
        </div>
        </div>
    );
}

export default Home