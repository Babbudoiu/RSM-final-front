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
                        <NavLinks to="reservations">Reservations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="seating-Plan">Seating Plan</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu">Menu</NavLinks>
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