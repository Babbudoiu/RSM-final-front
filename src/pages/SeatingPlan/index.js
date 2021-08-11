import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SeatingPlan = ({setUser}) => {
    return (
        <>
        <Navbar setUser={setUser}/>
        <Footer />
        </>
    )
}

export default SeatingPlan;
