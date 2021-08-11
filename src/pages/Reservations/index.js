import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../components/Footer';
import MealTimes from '../../components/MealTimes';


const Reservations = ({setUser}) => {
   const [date, setDate] = useState(new Date());
   const [showMeals, setShowMeals] = useState(false);

   const onChange = date => {
       setDate(date);
   }
    
    return (
       <>
        <Navbar setUser={setUser} /> 
        <div>
        <Calendar onChange={onChange} value={date} onClickDay={() => 
        {setShowMeals(true)}}/>
        <MealTimes showMeals={showMeals}/>
        <Footer />
       </div>
       </> 
    )
}

export default Reservations;

