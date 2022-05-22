import React, {useState} from 'react'

function AddReviewForm({data, reviewList, setReviewList}) {
    console.log(data)

    // problem here is user_id is not available until we can specify the user creating the review.  For now I have them know their id number.
    const [formData, setFormData] = useState({
        content: "",
        rating: null,
        user_id: null,
        rv_id: data.id,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("/reviews", configObj)
        .then(r => r.json())
        // This is persisting to DB but need a way to update dom -- for now I created State to rerender the component, but its just a version of RVdetails state (rvDetails.reviews) could be a use effect but not sure how to refresh upon Submit
        .then((data) => {
            console.log(data)
            setReviewList({
                ...reviewList,
                data
            })
        })

    }

    const handleChange = (e) => {
        const key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }


  return (

    <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={handleChange} type="number" name="user_id" placeholder="User_id number" />
        <input onChange={handleChange} type="number" min="1" max="5" name="rating"/>
        <input onChange={handleChange} type="text" name="content" placeholder="Write your comments here..."/>
        <input type="submit" />
    </form>
  )
}

export default AddReviewForm