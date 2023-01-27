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

    // const handleChange = e => {
    //     setReview({
    //       ...review,
    //       [e.target.name]: e.target.value
    //     })
    //   }

    //   const addReview = (review) => {
    //     fetch('/reviews', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json'},
    //       body: JSON.stringify(review)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       setUserReviews([...userReviews, data])
    //     })
    //   }

//       const handleSubmit = e => {
//         e.preventDefault();
//         console.log(review);
//         // setReview(newReview);
//       }

//     return (
//         <div className="reviewForm">
//           <h1 >Add Review:</h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="rating">Rating:</label>
//                     <select 
//                         className="customSelect"
//                         placeholder="Choose Rating"
//                         name="rating" 
//                         value={review.rating}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option key={null} value={''}> </option>
//                         <option key={1} value={1}>1</option>
//                         <option key={2} value={2}>2</option>
//                         <option key={3} value={3}>3</option>
//                         <option key={4} value={4}>4</option>
//                         <option key={5} value={5}>5</option>
//                     </select>
//             </div> 
//                 <br />
//             <div>
//                 <label htmlFor="content">Type your review: </label>
//                     <input 
//                         type="content" 
//                         id="content" 
//                         name="content" 
//                         value={review.content}
//                         onChange={handleChange}
//                         required
//                     >
//                     </input>
//             </div>
//                 <br />
//                 <input id='formButton' type="submit" value="Add Review" />
//           </form>
//         </div>
//     )

        

// }

// export default ReviewForm