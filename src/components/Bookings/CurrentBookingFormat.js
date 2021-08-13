import React from "react";
import { LunchTimes } from "./LunchTimes";

export const CurrentBookingFormat = ({currentBookings})=>{
  
     
    return(
        
        <div>
        {currentBookings[0] !== undefined ?
<table >
                    <thead>
                        <tr>
                        <td>Time</td>
                        <td>Name</td>
                        <td>Group Size</td>
                        <td>Phone Number</td>
                        </tr>
                    </thead>
            
                    <tbody>
                        {LunchTimes.map((time,index)=>{

                            return(
                                <tr>
                                    <td>{time}</td>
                                    <td>{currentBookings[0][index].map((booking)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr>
                        <td>{`${booking[0]} ${booking[1]}`}</td>
                        
                    </tr>
                          :<></> }    </>         )

                                    })}</td>
                                    <td>{currentBookings[0][index].map((booking)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr>
                        
                        <td>{booking[2]}</td>
                        
                    </tr>
                          :<></> }    </>         )

                                    })}</td>
                                    <td>{currentBookings[0][index].map((booking)=>{
                                        return(
                                            <>
                                            {booking !== null?
                                            <tr>
                        
                        <td>{booking[3]}</td>
                    </tr>
                          :<></> }    </>         )

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