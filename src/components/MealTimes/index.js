import React from 'react';
import LunchBookings from '../Bookings';
import DinnerBookings from '../BookingsDinner';


export const MealTimes = ({showMeals, lunch, setLunch, dinner, setDinner}) => {

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
           <div className="mealBtn">
           <p>Lunch or Dinner?</p>
           <button 
           onClick={lunchHandler}>Lunch</button>
           <button 
           onClick={dinnerHandler}>Dinner</button>
           </div>
      
        {lunch? <LunchBookings /> : <> </>}
        {dinner? <DinnerBookings /> : <> </>}
    
      </div> 
    )
}

export default MealTimes;