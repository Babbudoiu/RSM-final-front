import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reservations from "./pages/Reservations"
import Menu from "./pages/Menu";
import SeatingPlan from "./pages/SeatingPlan"

import { AdminLogin } from "./pages/AdminLogin";
import { UserLogin } from "./pages/userLogin";


const App  = () => {
  console.log(process.env.REACT_APP_BACK_END)
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
        <UserLogin setuser={setUser} />
      </Route>

    </Router>
  )
};

export default App;
