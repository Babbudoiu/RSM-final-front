import React from 'react';
import DinnerBookings from '../Bookings/DinnerBookings';
import LunchBookings from '../Bookings/LunchBooking';



export const MealTimes = ({showMeals, lunch, setLunch, dinner, setDinner, date}) => {

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
           <div className="mealBtns">
           <p>Lunch or Dinner?</p>
           <button className="mealBtn"
           onClick={lunchHandler}>Lunch</button>
           <button className="mealBtns"
           onClick={dinnerHandler}>Dinner</button>
           </div>
      
        {lunch? <LunchBookings date={date} /> : <> </>}
        {dinner? <DinnerBookings date={date} /> : <> </>}
    
      </div> 
    )
}

export default MealTimes;