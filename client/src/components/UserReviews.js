import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserReviews({reviews}){

    const renderReviews = reviews.map((review) => {
        return(
            <Button 
                variant="outline-secondary"
                className="user-review"
                style={{textAlign: "center", textDecoration: "none"}}
                key={review.id}
                href={`/wines/${review.wine_id}`}
                >
                <p>{review.content}</p>
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