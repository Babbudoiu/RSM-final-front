import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Home = ({ setUser }) => {
  return (
    <div className="container">
      <div className="children-container">
        <Navbar setUser={setUser} />
      </div>
      <Footer />
    </div>
  );
};
