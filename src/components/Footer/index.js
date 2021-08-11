import React from "react";
import Clock from 'react-live-clock';

const Footer = () => {

    return(
        <div className="footer">
           <Clock 
           format={'HH:mm'} ticking={true} timezone={'GMT +1'} />
        </div>
    )
};

export default Footer;