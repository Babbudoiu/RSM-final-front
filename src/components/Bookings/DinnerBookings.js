import { Bookings } from "./bookingForm";
import { DinnerTimes } from "./DinnerTimes";

const DinnerBookings = ({ date }) => {
  

  return (
    <div>
      {DinnerTimes.map((time,index) => {
        return Bookings(date, time, index,1);
      })}
    </div>
  );
};

export default DinnerBookings;
