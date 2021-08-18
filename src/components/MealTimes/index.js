import React from "react";
import DinnerBookings from "../Bookings/DinnerBookings";
import LunchBookings from "../Bookings/LunchBooking";

export const MealTimes = ({
  showMeals,
  lunch,
  setLunch,
  dinner,
  setDinner,
  date,
}) => {
  const lunchHandler = () => {
    if (lunch === true) {
      setLunch(false);
    } else if (lunch === false) {
      setLunch(true);
    }
    console.log(lunch);
  };

  const dinnerHandler = () => {
    if (dinner === true) {
      setDinner(false);
    } else if (dinner === false) {
      setDinner(true);
    }
  };

  return (
    <div className="meal" style={showMeals ? {} : { display: "none" }}>
      <p className="lunchOrDinner">Lunch or Dinner?</p>
      <button className="mealBtn lunch" onClick={lunchHandler}>
        Lunch
      </button>
      <button className="mealBtn dinner" onClick={dinnerHandler}>
        Dinner
      </button>

      {lunch ? <LunchBookings date={date} /> : <> </>}
      {dinner ? <DinnerBookings date={date} /> : <> </>}
    </div>
  );
};

export default MealTimes;
