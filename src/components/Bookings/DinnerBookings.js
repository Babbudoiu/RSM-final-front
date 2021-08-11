import { Bookings } from "./bookingForm";

const DinnerBookings = ({ date }) => {
  const times = [
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
  ];

  return (
    <div>
      {times.map((time) => {
        return Bookings(date, time);
      })}
    </div>
  );
};

export default DinnerBookings;
