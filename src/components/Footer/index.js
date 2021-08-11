import React from "react";

const Footer = () => {
    let today = new Date(),
    time = today.getHours() + ':' + today.getMinutes();

    return(
        <div className="footer">
            <p>{time}</p>
        </div>
    )
};

export default Footer;