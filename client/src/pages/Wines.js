import React, { useEffect, useState } from 'react';
import WineCard from "../components/WineCard";

function Wines({user}) {

    const [userWines, setUserWines] = useState([]);

    useEffect(() => {
        setUserWines(user.wines)
    }, [user.wines])


    return(
        <div className="wines-page">
            <div className="wines-header">
                My Wines
            </div>
            <div className="wines-container">
               {
                userWines.map((wine) => {
                    return(<WineCard key={wine.id} wine={wine}/>);
                })
               }
            </div>
        </div>  
        )

}


export default Wines;