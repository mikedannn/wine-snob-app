import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function NewReviewForm() {
  const [ userReviewRating, setUserReviewRating ] = useState("")
  const [ userReviewContent, setUserReviewContent ] = useState("")
  const [ userReviewWineId, setUserReviewWineId ] = useState(null)
  const [allWines, setAllWines] = useState([]);
  const [ reviews, setReviews ] = useState([]);

  useEffect(() => {
    fetch(`/reviews`)
        .then((r) => r.json())
        .then(setReviews);
  }, []);

  useEffect(() => {
      fetch("/wines/all")
        .then((response) => response.json())
        .then(setAllWines)
    }, []);

  let navigate = useNavigate();

    const handleSubmitReviewClick = (e) => {
      navigate(`/`);
    };
    
    const handleAddWineClick = (e) => {
        navigate(`wines/new`)
    };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch(`/reviews`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            rating: userReviewRating,
            content: userReviewContent,
            wine_id: userReviewWineId
        })
    })
        .then((r) => r.json())
        .then((data) => {
            setReviews((reviews) => [data, ...reviews]);
            handleSubmitReviewClick();
        })
      }


    return(
      <div id="review-form">
              <Form onSubmit={(e) => handleFormSubmit(e)}>
                <label>
                Select Wine:
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Wine"
                    name="wine_id"
                    value={userReviewWineId}
                    onChange={(e) => setUserReviewWineId(e.target.value)}
                    required
                >
                    <option value="none">Select Wine:</option>
                    {allWines.map((wine) => (
                        <option key={wine.id} value={wine.id}>
                            {wine.varietal} | {wine.color} | {wine.winery} | {wine.year}
                    </option>
                    ))}
                </select>
                <button id="tripButton" onClick={handleAddWineClick}>
                    Can't Find Wine? Add New Wine!
                </button>      
                </label>
                  <FloatingLabel
                      controlId="floatingRating"
                      label="Rating"
                      style={{color: "#282c34"}}
                      >
                      <Form.Control 
                          type="text" 
                          placeholder="Rating" 
                          value={userReviewRating}
                          onChange={(e) => setUserReviewRating(e.target.value)}
                          />
                  </FloatingLabel>
                  <FloatingLabel
                      controlId="floatingContent"
                      label="Content"
                      className="mx-3"
                      style={{color: "#282c34"}}
                      >
                      <Form.Control 
                          type="text" 
                          placeholder="Content" 
                          value={userReviewContent}
                          onChange={(e) => setUserReviewContent(e.target.value)}
                          />
                  </FloatingLabel>
                  
                  <Button 
                      variant="dark" 
                      type="submit"
                      >Submit
                  </Button>
              </Form>
          </div>
  )
}

export default NewReviewForm;
