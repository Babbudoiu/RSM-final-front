import React from 'react'
import Navbar from '../../components/Navbar'


export const Home =({setUser})=>{
return (
    <div>
    <Navbar setUser={setUser}/> 
    <h1>HOME!!!</h1>
    </div>
)
}