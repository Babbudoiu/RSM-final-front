import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const Home =({setUser})=>{
return (
    <div>
    <Navbar setUser={setUser}/> 
    <h1>HOME!!!</h1>
    <Footer />
    </div>
)
}