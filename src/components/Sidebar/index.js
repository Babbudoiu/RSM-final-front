import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarLink, SidebarWrapper} from './SidebarElements';

const Sidebar = (isOpen, toggle) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="reservations" onClick={toggle}>Reservations</SidebarLink>
                    <SidebarLink to="seating-plan" onClick={toggle}>Seating Plan</SidebarLink>
                    <SidebarLink to="menu" onClick={toggle}>Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signout">Sign Out</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;