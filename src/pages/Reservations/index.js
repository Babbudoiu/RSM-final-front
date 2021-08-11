import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../components/Footer';

const Reservations = () => {
   const [date, setDate] = useState(new Date());

   const onChange = date => {
       setDate(date);
   }
    
    return (
       <>
        <Navbar /> 
        <div>
        <Calendar onChange={onChange} value={date}/>
        <Footer />
       </div>
       </> 
    )
}

export default Reservations

