import React from "react";
import Clock from 'react-live-clock';

const Footer = () => {

    return(
        <div className="footer">
           <Clock 
           format={'HH:mm'} ticking={true} timezone={'GB'} />
        </div>
    )
};

export default Footer;