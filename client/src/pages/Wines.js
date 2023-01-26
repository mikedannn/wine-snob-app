import React, {useState} from 'react';
import WineCard from './WineCard';
import {Route, useParams} from 'react-router-dom';
import WineForm from "../components/WineForm";

const Wines = ({userWines, setUserWines}) => {

    const [clicked, setClicked] = useState(false);

    const winesList = userWines.map((wine) => <WineCard
        key={wine.index}
        wine={wine}
    />)

    if(!clicked) {
        return (
        <div>
            <div>
                <button className='addWineButton' onClick={(e) => setClicked(true)}>Add Wine to Profile</button>
            </div>
            <div className='listOfWines'>
                {winesList}
            </div>
        </div>
        )
    }
    else {
        return (
            <div>
                <div>
                    <WineForm userWines={userWines} setUserWines={setUserWines} setClicked={setClicked}/>
                </div>
                <div className='listOfWines'>
                    {winesList}
                </div>
            </div>
            )

    }
}

export default Wines