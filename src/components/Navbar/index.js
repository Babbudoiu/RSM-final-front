import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Navbar = ({setUser, toggle}) => {
    
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

const MobileIcon = styled.div`
 display: none;
 @media screen and (max-width: 768px) {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color: red ;
 }
`;



















