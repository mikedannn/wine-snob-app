import React from 'react';
import WineCard from "../components/WineCard";

function Wines({user}) {


    return(
        <div className="wines-page">
            <div className="wines-header">
                My Wines
            </div>
            <div className="wines-container">
               {
                user.wines.map((wine) => {
                    return(<WineCard key={wine.id} wine={wine}/>);
                })
               }
            </div>
        </div>  
        )

}


export default Wines;