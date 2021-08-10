import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Calendar from 'react-calendar'

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
       </div>
       </> 
    )
}

export default Reservations

