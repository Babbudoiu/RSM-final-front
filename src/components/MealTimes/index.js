import React, { useState } from 'react';

export const MealTimes = ({showMeals}) => {

const [lunch, setLunch] = useState(false);
const [dinner, setDinner] = useState(false);


    return (
       <div className="meals" style={showMeals ? {} : {display: 'none'}}>  
           <p>Lunch or Dinner?</p>
           <button onClick={() => {
               if (lunch === true) {
               setLunch(false)
           } else if(lunch === false) {
               setLunch(true)}; console.log(lunch)}}>Lunch</button>
           <button onClick={() => {
               if (dinner === true) {
                setDinner(false)
            } else if(dinner === false) {
                setDinner(true)}; console.log(dinner)}}>Dinner</button>
           </div> 
       
    )
    }

    export default MealTimes;