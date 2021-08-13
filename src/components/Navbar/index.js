import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../Logo/The\ Walrus\ Logo\ \(2\).png"

// import { Nav, NavLogo, NavbarContainer, NavMenu, NavItem, NavLinks} from './NavbarElements';

export const Navbar = ({setUser}) => {

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("MyToken");
        setUser();

    }
    return (
        <div className="navbar">
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