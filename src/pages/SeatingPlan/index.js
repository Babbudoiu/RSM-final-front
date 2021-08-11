import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Tables from '../../components/Tables'

const SeatingPlan = ({setUser}) => {
    return (
        <>
        <Navbar setUser={setUser}/>
        <Tables />
        <Footer />
        </>
    )
}

export default SeatingPlan;
