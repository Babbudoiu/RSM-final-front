import React from "react";
import { DinnerTimes } from "./DinnerTimes";
import { LunchTimes } from "./LunchTimes";

export const CurrentBookingFormat = ({currentBookings, dinner,lunch})=>{
  
     let timeSelector 
     let times=[]
     if(dinner===true){
         times=DinnerTimes
         timeSelector=1
     }else if (lunch===true){
        times=LunchTimes
         timeSelector=0 
     }
    return(
        
        <div className="booking-container">
        {currentBookings[timeSelector] !== undefined ?
                    <table className="booking-table">
                    <thead>
                        <tr>
                        <td className="td-border">Time</td>
                        <td className="td-border">Name</td>
                        <td className="td-border">Group Size</td>
                        <td className="td-border">Phone Number</td>
                        </tr>
                    </thead>
            
                    <tbody>
                        {times.map((time,index)=>{

                            return(
                                <tr key= {index}>
                                    <td className="td-border">{time}</td>
                                    <td className="td-border">{currentBookings[timeSelector][index].map((booking,index2)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr key = {index2}>
                        <td>{`${booking[0]} ${booking[1]}`}</td>
                        
                    </tr>
                          :<></> }  </> )

                                    })}</td>
                                    <td className="td-border">{currentBookings[timeSelector][index].map((booking,index2)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr key = {index2}>
                        
                        <td >{booking[2]}</td>
                        
                    </tr>
                          :<></> } </>  )

                                    })}</td>
                                    <td className="td-border">{currentBookings[timeSelector][index].map((booking,index2)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr key = {index2}>
                        
                        <td  className="center-td">{booking[3]}</td>
                    </tr>
                          :<></> } </> )

                                    })}</td>
                                </tr>
                            )
                        })}

                    
                    </tbody>
                    </table> 
           :<></>}
        </div>      



        
    )

        }