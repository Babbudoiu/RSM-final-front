import { Bookings } from "./bookingForm";
import { LunchTimes } from "./LunchTimes";

const LunchBookings = ({ date }) => {
  

  return (
    <div>
      {LunchTimes.map((time, index) => {
        return Bookings(date, time, index,0);
      })}
    </div>
  );
};

export default LunchBookings;
