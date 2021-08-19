import React from "react";
import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/home" onClick={toggle}>
            Walrus
          </SidebarLink>
          <SidebarLink to="/reservations" onClick={toggle}>
            Reservations
          </SidebarLink>
          <SidebarLink to="/seating-plan" onClick={toggle}>
            Seating Plan
          </SidebarLink>
          <SidebarLink to="/menu" onClick={toggle}>
            Menu
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/home">Sign Out</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;



export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #0D0D0D;
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
 top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;
export const CloseIcon =styled(FaTimes)`
 color: #fff;
`;
export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`;
export const SidebarWrapper = styled.div`
 color: #fff;
`;
export const SidebarLink = styled(LinkR)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer;
 &:hover {
     color: #01BF71;
     transition: 0.2s ease-in-out;
 }
`;
export const SideBtnWrap = styled.div`
 display: flex;
 justify-content: center;
` ;
export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 60px);
 text-align: center;
 @media screen and (max-width: 480px){
   grid-template-rows: repeat(6, 60px);
 }
`;
export const SidebarRoute = styled(LinkR)`
 border-radius: 50px;
 background: #01BF71;
 white-space: nowrap;
 padding: 16px 64px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 &:hover{
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #010606;
 }
`;















