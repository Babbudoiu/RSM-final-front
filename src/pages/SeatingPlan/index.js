import React from "react";
import Navbar from "../../components/Navbar";
import Tables from "../../components/Tables";
import Footer from "../../components/Footer";

const SeatingPlan = ({ setUser, setTable }) => {
  return (
    <div className="container">
      <div className="children-container">
        <Navbar setUser={setUser} />
        <Tables setTable={setTable} />
      </div>
      <Footer />
    </div>
  );
};

export default SeatingPlan;
