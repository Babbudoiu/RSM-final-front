import React from 'react';
import Navbar from '../../components/Navbar';

export const Home =({setUser})=>{
return (
    <div className="container">
    <Navbar setUser={setUser}/> 
    </div>
)
}