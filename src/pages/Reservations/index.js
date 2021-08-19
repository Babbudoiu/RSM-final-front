import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import MealTimes from "../../components/MealTimes";
import Calendar from "react-calendar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { getBookings } from "../../utils";
import { CurrentBookingFormat } from "../../components/Bookings/CurrentBookingFormat";

const Reservations = ({ setUser, lunch, setLunch, dinner, setDinner }) => {
  const [date, setDate] = useState(new Date());
  const [showMeals, setShowMeals] = useState(false);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    getBookings(date, setCurrentBookings);
    setLoaded(true);
  }, [date, loaded]);

  return (
    <div className="container">
      <div className="children-container">
        <Navbar setUser={setUser} toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <Calendar
          onChange={onChange}
          value={date}
          onClickDay={(e) => {
            setShowMeals(true);
          }}
        />

        <MealTimes
          showMeals={showMeals}
          lunch={lunch}
          setLunch={setLunch}
          dinner={dinner}
          setDinner={setDinner}
          date={date}
        />

        {currentBookings ? (
          <CurrentBookingFormat
            currentBookings={currentBookings}
            dinner={dinner}
            lunch={lunch}
          />
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
