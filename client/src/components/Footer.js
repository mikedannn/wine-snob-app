import React from "react";

function Footer(){

    return(
        <div style={{backgroundColor: "white", height: "40px", marginTop: "200px", padding: "25px", display:"flex", justifyContent: "space-evenly"}}>

            <p style={{opacity: "40%"}}>Created using React, Ruby, and Rails by: <a href="https://github.com/mikedannn" target="_blank" rel="noreferrer" style={{ color: "black"}}>Michael Daniels</a></p>
            
        </div>
    )
}

export default Footer;