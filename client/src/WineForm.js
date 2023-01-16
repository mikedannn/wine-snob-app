import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function WineForm({ userWines, setUserWines}) {

    const [wine, setWine] = useState({
        varietal: '',
        color: '',
        winery: '',
        year: '',
        image_url: ''
    })

    let navigate = useNavigate();
        const handleCreateUserClick = (e) => {
        navigate('/');
    };

    const handleChange = e => {
        setWine({
          ...wine,
          [e.target.name]: e.target.value
        })
      }

      const addWine = (wine) => {
        fetch('/wines', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(wine)
        })
        .then(res => res.json())
        .then(data => {
          setUserWines([...userWines, data])
        })
      }

      const handleSubmit = e => {
        e.preventDefault();
        addWine(wine);
        handleCreateUserClick();
      }

    return (
        <div className="wineForm">
          <h1 >Add New Wine</h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="varietal">Varietal:</label>
                    <input 
                        type="text" 
                        id="varietal" 
                        name="varietal" 
                        value={wine.varietal}
                        onChange={handleChange}
                        autoFocus={true}
                        required
                    >   
                    </input>
            </div> 
                <br />
            <div>
                <label htmlFor="color">Color:</label>
                    <select 
                        className="customSelect"
                        placeholder="Select Color"
                        name="color" 
                        value={wine.color}
                        onChange={handleChange}
                        required
                    >
                        <option key={'Red'} value={'Red'}>Red</option>
                        <option key={'White'} value={'White'}>White</option>
                        <option key={'Pink'} value={'Pink'}>Pink</option>
                        <option key={'Yellow'} value={'Yellow'}>Yellow</option>
                        <option key={'Orange'} value={'Orange'}>Orange</option>
                    </select>
            </div> 
                <br />
            <div>
                <label htmlFor="winery">Winery: </label>
                    <input 
                        type="text" 
                        id="winery" 
                        name="winery" 
                        value={wine.winery}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
            <div>
                <label htmlFor="year">Year: </label>
                    <input 
                        type="text" 
                        id="year" 
                        name="year" 
                        value={wine.year}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
            <div>
                <label htmlFor="image_url">Image URL: </label>
                    <input 
                        type="text" 
                        id="image_url" 
                        name="image_url" 
                        value={wine.image_url}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
                <input id='formButton' type="submit" value="Add Wine" />
          </form>
        </div>
    )

        

}

export default WineForm