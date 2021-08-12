import React from 'react';

export const Desserts = ({showDesserts}) => {

return (
    <div style={showDesserts ? {} : {display: 'none'}}>
        <h1>Desserts...</h1>
    </div>
)
};

export default Desserts;