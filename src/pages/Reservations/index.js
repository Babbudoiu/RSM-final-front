import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import MealTimes from '../../components/MealTimes';
import Calendar from 'react-calendar';
import Footer from '../../components/Footer';
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
                console.log(currentBookings);
    return (
        <div className="container">
            <div className="children-container">
        <Navbar setUser={setUser} /> 
        <Calendar 
        onChange={onChange} 
        value={date} 
        onClickDay={(e) => 
        {setShowMeals(true)}}/>

        <MealTimes 
        showMeals={showMeals}
        lunch={lunch}
        setLunch={setLunch}
        dinner={dinner}
        setDinner={setDinner}
        date={date}/>
        
        {currentBookings?<CurrentBookingFormat currentBookings={currentBookings}/>:<></> }
        
        
        

       </div>

       <Footer />
       </div>
       
    )
}

export default Reservations;

