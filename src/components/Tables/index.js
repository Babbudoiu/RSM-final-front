import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Tables = () => {

    return (
     <div>
        <div className="tables">
        <div>
            <Link to="/taborder" >
                <button type="button">Table1</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table2</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table3</button>
            </Link>
        </div>
        <div>
           <Link to="/taborder" >
                <button type="button">Table4</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table5</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table6</button>
            </Link>
        </div>
        <div>
            <Link to="/taborder" >
                <button type="button">Table7</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table8</button>
            </Link>
            <Link to="/taborder" >
                <button type="button">Table9</button>
            </Link>
        </div>
        </div>
    </div>
    )
}

export default Tables;