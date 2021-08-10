import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';

const App  = () => {
  const [admin, setAdmin] = useState();
  const[user,setUser]=  useState(initialState)
  return(
    <Router>
      <Navbar /> 
    </Router>
  )
};

export default App;
