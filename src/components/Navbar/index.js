import React from 'react'
import { Nav, NavLogo, NavbarContainer, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

export const Navbar = () => {
    return (
        <>
         <Nav>
             <NavbarContainer>
                 <NavLogo to= '/'>Walrus</NavLogo>
                 <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Reservations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Seating Plan</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Menu</NavLinks>
                    </NavItem>
                 </NavMenu>
                 <NavBtn>
                    <NavBtnLink to="/signout">Sign Out</NavBtnLink>
                 </NavBtn>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar;