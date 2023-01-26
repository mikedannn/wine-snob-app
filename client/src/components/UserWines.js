import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserWines({wines}){

    const renderWines = wines.map((wine) => {
        return(
            <Button 
                key={wine.id}
                variant="outline-warning"
                className="user-wine"
                href={`/wines/${wine.id}`}>
                {wine.varietal} | {wine.winery} | {wine.year}
            </Button>
        )
    })

    return(
        <div id="user-wines-container" key="user-wines">
            <h4>Your Wines</h4>
            <div className="wine-buttons-container">
                {renderWines}
            </div>
        </div>
    )
}

export default UserWines;