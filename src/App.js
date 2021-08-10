import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reservations from "./pages/Reservations"
import Menu from "./pages/Menu";
import SeatingPlan from "./pages/SeatingPlan"
const App  = () => {
  const [admin, setAdmin] = useState();
  const[user,setUser]=  useState(initialState)
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
    </Router>
  )
};

export default App;
