import React, { useState } from 'react';

export const MealTimes = ({showMeals}) => {

const [lunch, setLunch] = useState(true);
const [dinner, setDinner] = useState(true);

const lunchHandler = () => {
    if (lunch === true) {
        setLunch(false)
    } else if(lunch === false) {
        setLunch(true)}
         console.log(lunch)
    }

const dinnerHandler = () => {
    if (dinner === true) {
        setDinner(false)
    } else if(dinner === false) {
        setDinner(true)}
        console.log(dinner)
    }

    return (
       <div className="meals" style={showMeals ? {} : {display: 'none'}}>  
           <p>Lunch or Dinner?</p>
           <button onClick={lunchHandler}>Lunch</button>
           <button onClick={dinnerHandler}>Dinner</button>
           </div> 
       
    )
}

export default MealTimes;