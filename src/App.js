import react from 'react';
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import CodeForInterview from './Component/CodeForInterview';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Masti from './Masti/Admin';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/Admin" component={Masti} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
