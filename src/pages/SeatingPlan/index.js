import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Tables from "../../components/Tables";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

const SeatingPlan = ({ setUser, setTable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="children-container">
        <Navbar setUser={setUser} toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <Tables setTable={setTable} />
      </div>
      <Footer />
    </div>
  );
};

export default SeatingPlan;
