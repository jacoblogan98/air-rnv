import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"


function Review({ allReviews, instanceReview, setReviewList }) {

// need validation here to only delete Review if they are owner of that
  // if loggedIn.id === review.user_id then allow delete, else don't render button 


    const deleteReview = (id) => {
        console.log(id)
        fetch(`/reviews/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {

            const updatedReviewList = allReviews.filter(review => review.id !== id)
            setReviewList(updatedReviewList)
        })
      }
    

        const Arr = []

        for (let i = instanceReview.rating; i > 0; i--) {
            Arr.push("fa fa-star checked text-maple")
        }

        for (let i = (5 - instanceReview.rating); i > 0; i--) {
            Arr.push("fa fa-star-o text-maple")
        }

        const renderStars = Arr.map((starClass, i) => <span key={i} className={starClass}></span>)

        return (
            <Col>
                <Card
                    key={instanceReview.id}
                    style={{ width: '18rem' }}
                    className="mb-3 mx-auto"
                >
                    <Card.Header className="bg-sand">{renderStars}</Card.Header>
                    <Card.Body>
                        <Card.Title>{instanceReview.user_name}</Card.Title>
                        <Card.Text>{instanceReview.content}</Card.Text>
                        <Button onClick={() => deleteReview(instanceReview.id)}> Delete Review</Button>

                    </Card.Body>
                </Card>
            </Col>

        )
    }


export default Review