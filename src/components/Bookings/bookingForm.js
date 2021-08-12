import React, { useState } from "react";
import { createBooking } from "../../utils";


   export const Bookings = (date, time) => {
      const [firstName, setFirstName] = useState();
      const [surname, setsurname] = useState();
      const [groupSize, setGroupSize] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
  
      return (
        <form
          onSubmit={(e) =>
            createBooking(
              e,
              firstName,
              surname,
              groupSize,
              phoneNumber,
              date,
              time
            )
          }
        >
          <label>{time}</label>
          <button type="submit">Confirm Booking</button>
          <input
            type="text"
            className="bookingInp"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            className="bookingInp"
            onChange={(e) => setsurname(e.target.value)}
            placeholder="Surname"
          ></input>
          <input
            type="text"
            className="bookingInp"
            onChange={(e) => setGroupSize(e.target.value)}
            placeholder="Group size"
          ></input>
          <input
            type="text"
            className="bookingInp"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          ></input>
        </form>
      );
    }