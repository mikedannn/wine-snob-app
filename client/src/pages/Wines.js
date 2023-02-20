import React, {useEffect, useState} from 'react';
import WineCard from "../components/WineCard";
// import FilterBar from "../components/FilterBar";

function Wines() {
    const [wines, setWines] = useState([]);
    // const [filter, setFilter] = useState(null);
    const [searchResults, setSearchResults] = useState("");

    useEffect(() => {
        fetch("/wines")
            .then((r) => r.json())
            .then(setWines);
    }, []);

    const onSearchChange = (keyword) => {
        setSearchResults(wines.filter((wine) => wine.varietal.toLowerCase().includes(keyword.toLowerCase())))
    }

    return(
        <div className="wines-page">
            <div className="wines-container">
               {
                !searchResults ?
                wines.map((wine) => {
                    return(<WineCard key={wine.id} wine={wine}/>);
                })
                :
                searchResults.map((wine) => {
                    return(<WineCard key={wine.id} wine={wine}/>);
                })
               }
            </div>
        </div>  
        )


}


export default Wines;