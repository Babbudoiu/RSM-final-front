import React from 'react';

export const Starters = ({showStarters}) => {

return (
    <div style={showStarters ? {} : {display: 'none'}}>
        <h1>Starters...</h1>
    </div>
)
};

export default Starters;