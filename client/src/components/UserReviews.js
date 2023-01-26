import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserReviews({reviews}){

    const renderReviews = reviews.map((review) => {
        return(
            <Button 
                variant="outline-secondary"
                className="user-review"
                style={{textAlign: "left"}}
                key={review.id}
                href={`/spaces/${review.space_id}`}
                >
                <b>{review.rating}</b>
                <p>{review.content}...</p>
            </Button>
        )
    })

    return(
        <div id="user-reviews-container">
            <h4>Your Reviews</h4>
            {renderReviews}
        </div>
    )
}

export default UserReviews;