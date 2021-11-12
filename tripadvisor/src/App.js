import './App.css'
 import Homepage from "./components/homepage/homepage.js"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { Navbar } from "./components/Navbar/Navbar.jsx";
 import { Landing } from "./components/Landing/Landing.jsx";
 import { About } from "./components/Landing/About.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
                   <Navbar/>
                   <Landing/>
                   <About/>
            
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
