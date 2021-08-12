import { Bookings } from "./bookingForm";

const LunchBookings = ({ date }) => {
  const times = [
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
  ];

  return (
    <div>
      {times.map((time) => {
        return Bookings(date, time);
      })}
    </div>
  );
};

export default LunchBookings;
