import React, {useEffect, useState} from 'react';
import WineCard from "../components/WineCard";

function Wines() {
    const [wines, setWines] = useState([]);

    useEffect(() => {
        fetch("/wines")
            .then((r) => r.json())
            .then(setWines);
    }, []);

    return(
        <div className="wines-page">
            <div className="wines-header">
                My Wines
            </div>
            <div className="wines-container">
               {
                wines.map((wine) => {
                    return(<WineCard key={wine.id} wine={wine}/>);
                })
               }
            </div>
        </div>  
        )

}


export default Wines;