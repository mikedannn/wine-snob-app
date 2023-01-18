import { useNavigate } from "react-router-dom";

function WineCard({wine}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/wines/:id/review');
      }

    return (
        <div className="wineCard" >
            <div>
                <img className="wineImage" src={wine.image_url}/>
            </div>
            <div className="cardHeader">
                <h1>{wine.varietal} | {wine.winery}</h1>
            </div>
            <div className="cardContainer">
                <p className="wineYear">{wine.year}</p>
            </div>
            <div className="cardButton">
                {/* <button id="reviewButton" ><NavLink className="editLink" to={`/trips/${id}/edit`}>Edit Trip!</NavLink></button> */}
                <button id="reviewButton" onClick={handleClick}>Review Wine!</button>
            </div>
        </div>
    );
}

export default WineCard