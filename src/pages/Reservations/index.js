import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MealTimes from '../../components/MealTimes';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getBookings } from '../../utils';
import { CurrentBookingFormat } from '../../components/Bookings/CurrentBookingFormat';

const Reservations = ({setUser, lunch, setLunch, dinner, setDinner}) => {
   const [date, setDate] = useState(new Date());
   const [showMeals, setShowMeals] = useState(false);
   const [currentBookings,setCurrentBookings] = useState([])

   const onChange = date => {
       setDate(date);
      
   }
  

    
   useEffect(()=>{
    getBookings(date,setCurrentBookings)
  },[date])

    return (
       <>
        <Navbar setUser={setUser} /> 
        <div>
        <MealTimes 
        showMeals={showMeals}
        lunch={lunch}
        setLunch={setLunch}
        dinner={dinner}
        setDinner={setDinner}
        date={date}/>
        {currentBookings?<CurrentBookingFormat currentBookings={currentBookings}/>:<></> }
        
        <Calendar 
        onChange={onChange} 
        value={date} 
        onClickDay={(e) => 
        {setShowMeals(true)}}/>
        
        <Footer />
       </div>
       </> 
    )
}

export default Reservations;

