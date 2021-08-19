import React from 'react';
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { MobileIcon } from './NavbarElements';


export const Navbar = ({setUser, toggle}) => {

    console.log(toggle);

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("MyToken");
        setUser();

    }
    
    return (
        <div className="navbar">
        <MobileIcon onClick = {toggle}>
            <FaBars />
        </MobileIcon>
        <NavLink 
        to="/home" 
        className="navlink">Walrus</NavLink>
        <NavLink 
        to="/reservations"
        className="navlink">Reservations</NavLink>
        <NavLink 
        to="/seating-plan"  
        className="navlink">Seating Plan</NavLink>
        <NavLink 
        to="/menu"  
        className="navlink">Menu</NavLink>
        <button className="navBtn" onClick={logoutHandler}>Sign Out</button>
    </div>
    )
}

export default Navbar;