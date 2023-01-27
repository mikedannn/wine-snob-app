import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";


function Reviews({user}){
    const params = useParams()
    const [reviews, setReviews] = useState([])
    

    useEffect(() => {
        fetch(`/wines/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [params.id]);


    const updateReviews = (data) => {
        setReviews([data, ...reviews])
    }

    const handleReviewEdit = (reviewId, content, rating) => {
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({content: content, rating: rating})
        }).then(res => {
            if(res.ok){
                setReviews((reviews) => {
                    let updatedReviews = reviews.map(review => {
                        if(review.id === reviewId){
                            console.log(review);
                        //    review.content = content 
                        //     review.rating = rating
                        }
                        return review;
                    })
                    return updatedReviews;
                })
    
            }
        })
    }

    const handleReviewDestroy = (reviewId) => {
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setReviews(
                    reviews.filter((review) => {
                        return review.id !== reviewId
                    })
                )
            }
        })
    }

    
    return(
        <div id="reviews-container">
            <h5 className="reviews-header"> Here's what other users think: </h5>
            <ReviewForm 
                wineId={params.id}
                updateReviews={updateReviews}
                />

            {reviews.map(review => {
                return(<Review 
                    key={review.id}
                    review={review} 
                    user={user}
                    handleReviewDestroy={handleReviewDestroy}
                    handleReviewEdit={handleReviewEdit}
                    />)
            })}
        </div>
    );
}

export default Reviews;