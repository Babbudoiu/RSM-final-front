import React from 'react';

export const Mains = ({showMains}) => {

return (
    <div style={showMains ? {} : {display: 'none'}}>
        <h1>Mains...</h1>
    </div>
)
};

export default Mains;