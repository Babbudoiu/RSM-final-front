import React from 'react';

export const Drinks = ({showDrinks}) => {

return (
    <div style={showDrinks ? {} : {display: 'none'}}>
        <h1>Drinks...</h1>
    </div>
)
};

export default Drinks;