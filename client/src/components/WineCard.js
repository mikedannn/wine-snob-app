import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';

function WineCard({wine}) {
    const {id, varietal, color, winery, year, image_url} = wine;
    const navigate = useNavigate();

    return(
        <div 
            className="wine-card" 
            onClick={() => navigate(`/wines/${id}`)}
            >
                <Card border="dark">
                    <Image src={image_url} style={{ aspectRatio: "1/1", height: "100%", width: "undefined", objectFit: "cover" }} rounded/>
                </Card>
                <article className="wine-card-info">
                    <div>
                        <h2>{varietal} | {winery} </h2>
                        <h3>{color}</h3>
                        <h2>{year}</h2>
                    </div>
                    {/* <div>
                        <h2 id="star-rating">{rating ? '★'+ rating : "★ unrated"}</h2>
                    </div> */}
            </article>
        </div>
    )


    // return (
    //     <div className="wineCard" >
    //         <div>
    //             <img className="wineImage" src={wine.image_url}/>
    //         </div>
    //         <div className="cardHeader">
    //             <h1>{wine.varietal} | {wine.winery}</h1>
    //         </div>
    //         <div className="cardContainer">
    //             <p className="wineYear">{wine.year}</p>
    //         </div>
    //         <div className="cardButton">
    //             {/* <button id="reviewButton" ><NavLink className="editLink" to={`/trips/${id}/edit`}>Edit Trip!</NavLink></button> */}
    //             <button id="reviewButton" onClick={handleClick}>Review Wine!</button>
    //         </div>
    //     </div>
    // );
}

export default WineCard;