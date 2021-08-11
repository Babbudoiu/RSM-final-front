import React, { useState } from 'react';

export const MealTimes = ({showMeals}) => {

const [lunch, setLunch] = useState();
const [dinner, setDinner] = useState();


    return (
       <div className="meals" style={showMeals ? {} : {display: 'none'}}>  
           <p>Lunch or Dinner?</p>
           <button onClick={() => {setLunch(true)}}>Open Lunch Tab</button>
           <button onClick={() => {setLunch(false)}}>Close Lunch Tab</button>
           <button onClick={() => {setDinner(true)}}>Open Dinner Tab</button>
           <button onClick={() => {setDinner(false)}}>Close Dinner Tab</button>
        </div> 
       
    )
    }

    export default MealTimes;