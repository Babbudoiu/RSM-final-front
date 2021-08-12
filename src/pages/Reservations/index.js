import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
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
        <div className="container">
        <MealTimes 
        showMeals={showMeals}
        lunch={lunch}
        setLunch={setLunch}
        dinner={dinner}
        setDinner={setDinner}
        date={date}/>
        <Calendar 
        onChange={onChange} 
        value={date} 
        onClickDay={(e) => 
        {setShowMeals(true)}}/>
        

       </div>
       </> 
    )
}

export default Reservations;

