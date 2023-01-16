import React, {useState} from 'react';
import WineCard from './WineCard';
import {Route, useParams} from 'react-router-dom';
import WineForm from "./WineForm";

const Wines = ({userWines, setUserWines}) => {

    const winesList = userWines.map((wine) => <WineCard
        key={wine.id}
        wine={wine}
    />)

    return (
        <div>
            <h2>WINES</h2>
            <div className='listOfWines'>
                {winesList}
            </div>
            <div>
                <WineForm userWines={userWines} setUserWines={setUserWines}/>
            </div>
        </div>
    )
}

export default Wines