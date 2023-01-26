import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const newReview = {
    rating: '',
    content: ''
}


function ReviewForm({userReviews, setUserReviews}) {

    const [review, setReview] = useState(newReview);

    // let navigate = useNavigate();
    //     const handleCreateUserClick = (e) => {
    //     navigate('/wines');
    // };

    const handleChange = e => {
        setReview({
          ...review,
          [e.target.name]: e.target.value
        })
      }

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

      const handleSubmit = e => {
        e.preventDefault();
        console.log(review);
        // setReview(newReview);
      }

    return (
        <div className="reviewForm">
          <h1 >Add Review:</h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="rating">Rating:</label>
                    <select 
                        className="customSelect"
                        placeholder="Choose Rating"
                        name="rating" 
                        value={review.rating}
                        onChange={handleChange}
                        required
                    >
                        <option key={null} value={''}> </option>
                        <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                        <option key={4} value={4}>4</option>
                        <option key={5} value={5}>5</option>
                    </select>
            </div> 
                <br />
            <div>
                <label htmlFor="content">Type your review: </label>
                    <input 
                        type="content" 
                        id="content" 
                        name="content" 
                        value={review.content}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
                <input id='formButton' type="submit" value="Add Review" />
          </form>
        </div>
    )

        

}

export default ReviewForm