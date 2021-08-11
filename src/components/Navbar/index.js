import React from 'react'
import { Nav, NavLogo, NavbarContainer, NavMenu, NavItem, NavLinks} from './NavbarElements';

export const Navbar = ({setUser}) => {
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("MyToken");
        setUser();
    }
    return (
        <>
         <Nav>
             <NavbarContainer>
                 <NavLogo to= '/'>Walrus</NavLogo>
                 <NavMenu>
                    <NavItem>
                        <NavLinks to="reservations">Reservations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="seating-Plan">Seating Plan</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu">Menu</NavLinks>
                    </NavItem>
                 </NavMenu>
                 <button 
                 className = "logOutBtn"
                 onClick = { logoutHandler } >Log Out</button>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar;