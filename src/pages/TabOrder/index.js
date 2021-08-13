import React from 'react';
import { Link } from 'react-router-dom';

const TabOrder =({table, setUser}) => {
    return (
        <div>
            <Link to="/seating-plan">
                <button type="button">Close tab</button>
            </Link>
        </div>
    )
}

export default TabOrder;
