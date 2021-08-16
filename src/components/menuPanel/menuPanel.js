import React, {useState} from 'react';
import Starters from './starters.js';
import Mains from './mains.js';
import Desserts from './desserts.js';
import Drinks from './drinks.js';

export const Panel = ({showMenus}) => {
    const [showStarters, setShowStarters] = useState(false);
    const [showMains, setShowMains] = useState(false);
    const [showDesserts, setShowDesserts] = useState(false);
    const [showDrinks, setShowDrinks] = useState(false);
 
    return(
     <div style={showMenus ? {} : {display: 'none'}}>
       <button onClick={(e) => {setShowStarters(true)}}>Starters</button>
       <button onClick={(e) => {setShowMains(true)}}>Mains</button>
       <button onClick={(e) => {setShowDesserts(true)}}>Dessert</button>
       <button onClick={(e) => {setShowDrinks(true)}}>Drinks</button> 
       <div>
          <Starters showStarters={showStarters}/>
          <Mains showMains={showMains}/>
          <Desserts showDesserts={showDesserts}/>
          <Drinks showDrinks={showDrinks}/> 
       </div>
     </div>
 )
};

export default Panel;