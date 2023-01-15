

function WineCard({wine}) {

    return (
        <div className="wineCard" >
            <div className="cardHeader">
                <h1>{wine.varietal} | {wine.winery}</h1>
            </div>
            <div>
                <img src={wine.image_url}/>
            </div>
            <div className="cardContainer">
                <p className="wineYear">{wine.year}</p>
            </div>
        </div>
    );
}

export default WineCard