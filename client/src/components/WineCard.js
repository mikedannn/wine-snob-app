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
                    <Image src={image_url} style={{ aspectRatio: "1/1", height: "300px", width: "250px", objectFit: "cover", textAlign: "center" }} rounded/>
                </Card>
                <article className="wine-card-info">
                    <div>
                        <h2>{varietal} | {winery} </h2>
                        <h3>{color}</h3>
                        <h2>{year}</h2>
                    </div>
            </article>
        </div>
    )
}

export default WineCard;