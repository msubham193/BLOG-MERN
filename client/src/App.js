
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Single from './components/Pages/Single/Single';
import Setting from './components/Setting/Setting';
import Write from './components/Write/Write';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from './components/Pages/Register/Register';

function App() {
  
  const user  = false ;

  return (

    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/register">
        {user? <Home />:<Register/>}
        </Route>
        <Route path="/login">
        {user? <Home />:<Login/>}
        </Route>
        <Route path="/write">
        {user? <Write />:<Register/>}
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
