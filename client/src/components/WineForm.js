import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function WineForm({ addNewWine }) {

    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        varietal: '',
        color: '',
        winery: '',
        year: '',
        image_url: ''        
    })

      const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        fetch('/wines', {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(formData)
          }).then((r) => {
            if(r.ok){
              addNewWine(formData)
              setFormData({varietal: "", color: "", winery: "", year: "",image_url: ""})
            } else{
              r.json().then((err) => setErrors(err.errors));
            }
          })
      }

      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
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
                        value={formData.varietal}
                        onChange={handleChange}
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
                        value={formData.color}
                        onChange={handleChange}
                        required
                    >
                        <option key={null} value={''}> </option>
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
                        value={formData.winery}
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
                        value={formData.year}
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
                        value={formData.image_url}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
            <div className="errors-container">
                {
                errors.map((err) => (
                <span id="error-message" key={err}>{`Invalid: ${err}`}</span>
                ))
                }
            </div>
                <br />
                <input id='formButton' type="submit" value="Add Wine" />
          </form>
        </div>
    )
}

export default WineForm;