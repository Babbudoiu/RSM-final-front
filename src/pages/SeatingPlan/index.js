import React from 'react';
import Navbar from '../../components/Navbar';
import Tables from '../../components/Tables'

const SeatingPlan = ({setUser}) => {
    return (
        <>
        <Navbar setUser={setUser}/>
        <div className="container">
        <Tables />
        </div>
        </>
    )
}

export default SeatingPlan;
