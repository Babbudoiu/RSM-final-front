import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import { AdminLogin } from "./pages/AdminLogin";

const App  = () => {
  const [admin, setAdmin] = useState();
  const[user, setUser]=  useState();
  return(
    <Router>
      
     
      {!admin ? <Redirect to="/" /> : !user ? <Redirect to="/userLogin" /> : <Redirect to="/home" /> }


      <Route exact path="/">
        <AdminLogin setAdmin={setAdmin} />
      </Route>

      <Route exact path="/userLogin">
        <userLogin setuser={setUser} />
      </Route>


    </Router>
  )
};

export default App;
