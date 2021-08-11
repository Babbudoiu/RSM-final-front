import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reservations from "./pages/Reservations"
import Menu from "./pages/Menu";
import SeatingPlan from "./pages/SeatingPlan"
import { AdminLogin } from "./pages/AdminLogin";
import { UserLogin } from "./pages/userLogin";
import { Home } from "./pages/home";
import { authUser } from "./utils";

const App  = () => {
  const [admin, setAdmin] = useState();
  const[user, setUser]=  useState();
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  
  useEffect(()=>{
    authUser(setUser)
  },[user])

  return(
    <Router>

       <Route path='/reservations'>
      <Reservations 
      setUser={setUser}
      lunch={lunch}
      setLunch={setLunch}
      dinner={dinner}
      setDinner={setDinner}/>
       </Route>
       <Route path="/menu">
         <Menu setUser={setUser} />
       </Route>
       <Route path ="/seating-plan">
         <SeatingPlan setUser={setUser} />
       </Route>
      
     
      {!admin ? <Redirect to="/" /> : !user ? <Redirect to="/userLogin" /> : <Redirect to="/home" /> }


      <Route exact path="/">
        <AdminLogin setAdmin={setAdmin} />
      </Route>

      <Route exact path="/userLogin">
        <UserLogin setUser={setUser} setAdmin={setAdmin} />
      </Route>

      <Route exact path="/home">
        <Home setUser={setUser}/>
      </Route>

    </Router>
  )
};

export default App;
