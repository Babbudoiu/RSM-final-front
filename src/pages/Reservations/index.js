import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MealTimes from '../../components/MealTimes';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Reservations = ({setUser, lunch, setLunch, dinner, setDinner}) => {
   const [date, setDate] = useState(new Date());
   const [showMeals, setShowMeals] = useState(false);

   const onChange = date => {
       setDate(date);
   }
    
    return (
       <>
        <Navbar setUser={setUser} /> 
        <div>
        <MealTimes 
        showMeals={showMeals}
        lunch={lunch}
        setLunch={setLunch}
        dinner={dinner}
        setDinner={setDinner}/>
        <Calendar 
        onChange={onChange} 
        value={date} 
        onClickDay={() => 
        {setShowMeals(true)}}/>
        
        <Footer />
       </div>
       </> 
    )
}

export default Reservations;

