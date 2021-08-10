import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reservations from "./pages/Reservations"
import Menu from "./pages/Menu";
import SeatingPlan from "./pages/SeatingPlan"
import { AdminLogin } from "./pages/AdminLogin";


const App  = () => {
  const [admin, setAdmin] = useState();
  const[user, setUser]=  useState();
  return(
    <Router>

       <Route path='/reservations'>
      <Reservations/>
       </Route>
       <Route path="/menu">
         <Menu />
       </Route>
       <Route path ="/seating-plan">
         <SeatingPlan />
       </Route>
      
     
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
