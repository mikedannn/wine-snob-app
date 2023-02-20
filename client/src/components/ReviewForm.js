import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ReviewForm({wineId, updateReviews}) {
  const [ userReviewRating, setUserReviewRating ] = useState("")
  const [ userReviewContent, setUserReviewContent ] = useState("")
  const [ showForm, setShowForm ] = useState(true)


  useEffect(() => {
    setShowForm(false)
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowForm(false)
    fetch(`/reviews`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            rating: userReviewRating,
            content: userReviewContent,
            wine_id: parseInt(wineId)
        })
    }).then(res => {
            if (res.ok){
                res.json().then((data) => updateReviews(data))
            }
      })
  }

  if(!showForm) return(
    <Button 
        className="m-2 p-4"
        variant="outline-light"
        onClick={() => setShowForm(true)}
        >Review Wine</Button>
    )

    return(
      <div id="review-form">
              <Form onSubmit={(e) => handleFormSubmit(e)}>
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

                  <Button 
                      variant="outline-light" 
                      className="ms-3"
                      onClick={() => setShowForm(false)}
                      >Cancel
                  </Button>
              </Form>
          </div>
  )
}

export default ReviewForm;

