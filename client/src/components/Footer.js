import React from "react";

function Footer(){

    return(
        <div style={{backgroundColor: "white", height: "80px", marginTop: "150px", padding: "25px", display:"flex", justifyContent: "space-evenly"}}>

            <p style={{opacity: "25%"}}>Created by <a href="https://github.com/winfeigle" target="_blank" rel="noreferrer" style={{ color: "black"}}>FOOTER</a></p>
            
            {/* <img src={DarkLogo} style={{width: "120px", opacity: "20%"}} alt=""/> */}

        </div>
    )
}

export default Footer;