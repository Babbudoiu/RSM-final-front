import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export const Home = ({ setUser }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
        setIsOpen(!isOpen)
  }
  return (
    <div className="container">
      <div className="children-container">
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar setUser={setUser} toggle={toggle}/>
      </div>
      <Footer />
    </div>
  );
};
