import React, { useState } from 'react';
import Panel from '../menuPanel/menuPanel.js';

export const Tables = () => {

const [showMenus, setShowMenus] = useState(false);

    return (
     <div>
        <div className="tables">
        <div>
            <button onClick={(e) => {setShowMenus(true)}}>Table 1</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 2</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 3</button>
        </div>
        <div>
            <button onClick={(e) => {setShowMenus(true)}}>Table 4</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 5</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 6</button>
        </div>
        <div>
            <button onClick={(e) => {setShowMenus(true)}}>Table 7</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 8</button>
            <button onClick={(e) => {setShowMenus(true)}}>Table 9</button>
        </div>
        </div>
        <div>
             <Panel showMenus={showMenus}/>
        </div>
    </div>
    )
}

export default Tables;