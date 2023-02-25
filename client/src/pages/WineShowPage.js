import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import Tab from 'react-bootstrap/Tab';


function WineShowPage({ user }){
    const [wineData, setWineData ] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/wines/${params.id}`)
            .then((r) => r.json())
            .then(data => setWineData(data));
      }, [params.id]);


    return(
    <div id="wine-container">
        <h2 style={{color: "black"}}>{wineData.varietal} | {wineData.winery} | {wineData.year}</h2>
        <div id="image-container">
            <div className="image">
                <img src={wineData.image_url} alt="wine"/>
            </div>
        </div>
        <div id="information">
            <Tab.Container id="tab-container" defaultActiveKey="#details" >
                    <Tab.Content id="list-content">
                        <Tab.Pane eventKey="#reviews">
                            <Reviews user={user} />
                        </Tab.Pane>
                    </Tab.Content>
            </Tab.Container>
        </div>

    </div>
    )
}

export default WineShowPage;