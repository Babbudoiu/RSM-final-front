import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Menu = ({setUser}) => {
    return (
       <div>
        <Navbar setUser={setUser}/>
        <Footer />
       </div>
    )
}

export default Menu;
