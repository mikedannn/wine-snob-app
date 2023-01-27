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
            {/* <div className="filter-bar-container">
                <FilterBar 
                    id="filter-bar"
                    onFilterChange={onFilterChange}
                    onSearchChange={onSearchChange}
                    filter={filter}
                    />
            </div> */}
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

// const Wines = ({userWines, setUserWines}) => {

//     const [clicked, setClicked] = useState(false);

//     const winesList = userWines.map((wine) => <WineCard
//         key={wine.index}
//         wine={wine}
//     />)

//     if(!clicked) {
//         return (
//         <div>
//             <div>
//                 <button className='addWineButton' onClick={(e) => setClicked(true)}>Add Wine to Profile</button>
//             </div>
//             <div className='listOfWines'>
//                 {winesList}
//             </div>
//         </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <div>
//                     <WineForm userWines={userWines} setUserWines={setUserWines} setClicked={setClicked}/>
//                 </div>
//                 <div className='listOfWines'>
//                     {winesList}
//                 </div>
//             </div>
//             )

//     }

export default Wines;