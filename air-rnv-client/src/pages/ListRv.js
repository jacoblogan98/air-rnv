import React, { useState } from 'react'

function ListRv() {
  const [imgArr, setImgArr] = useState({ url: null,
  rv_id: null
  })
  const [formData, setFormData] = useState({
    name: "",
    occupancy: 1,
    location: "",
    description: "",
    day_rate: "",
    pet_friendly: false,
    air_conditioned: false,
    shower: false,
    tv: false
  })

  const { name, occupancy, location, day_rate, description, pet_friendly, air_conditioned, shower, tv } = formData
  const handleChange = (e) => {

    console.log(e.target.files)
    // console.log(e.target.type)
    const key = e.target.name

    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [key]: e.target.checked
      })
    }
    else
      setFormData({
        ...formData,
        [key]: e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    const configObjRv = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(formData)
    }

    fetch("/rvs", configObjRv)
      .then(r => r.json())
      .then(data => console.log(data))

    const configObjImg = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(imgArr)
    }

    fetch("/photos", configObjImg)
      .then(r => r.json())
      .then(data => console.log(data))

  }

  const updateArr = (e) => {
    setImgArr({ ...imgArr, url: e.target.value })
    console.log(e.target.value)
  }
  console.log(imgArr)
  console.log(formData)

  return (

    <div>
      Want to list your RV? Fill out the form below and we will be in touch!

      <form onSubmit={handleSubmit}>
        <label className="col-sm-2 col-form-label">RV Name:</label>
        <div className="col-sm-10">
          <input value={name} onChange={handleChange} type="text" name="name" placeholder="Name" />
        </div>

        <label className="col-sm-2 col-form-label">
          How many does it sleep?
        </label>
        <div className="col-sm-10">
          <input value={occupancy} onChange={handleChange} type="number" name="occupancy" placeholder="Occupancy" />
        </div>

        <label className="col-sm-2 col-form-label">
          Location
        </label>
        <div className="col-sm-10">
          <input value={location} onChange={handleChange} type="text" name="location" placeholder="Where do you live" />
        </div>

        <label className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <input value={description} onChange={handleChange} type="text" name="description" placeholder="Say something flashy here!" />
        </div>

        <label className="col-sm-2 col-form-label">
          Asking Nightly Rate
        </label>
        <div className="col-sm-10">
          <input value={day_rate} onChange={handleChange} type="text" name="day_rate" placeholder="eg. $100/night" />
        </div>

        <div className="form-group row">
          <div className="col-sm-2">Select All That Apply</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input onChange={handleChange} value={pet_friendly} className="form-check-input" type="checkbox" name="pet_friendly" />
              <label className="form-check-label">
                Pet Friendly
              </label>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="form-check">
              <input onChange={handleChange} value={air_conditioned} className="form-check-input" type="checkbox" name="air_conditioned" />
              <label className="form-check-label">
                A/C
              </label>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="form-check">
              <input onChange={handleChange} value={shower} className="form-check-input" type="checkbox" name="shower" />
              <label className="form-check-label">
                Shower
              </label>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="form-check">
              <input onChange={handleChange} value={tv} className="form-check-input" type="checkbox" name="tv" />
              <label className="form-check-label">
                TV
              </label>
            </div>
          </div>
        </div>

        <label>Upload up to 5 Photos Here:</label>

        <input onChange={e => updateArr(e)} type="file"
          name="images"
          accept="image/png, image/jpeg" />
        {/* <input onChange={handleChange} value={images.image2} type="file"
          name="image2"
          accept="image/png, image/jpeg" />
        <input onChange={handleChange} value={images.image3} type="file"
          name="image3"
          accept="image/png, image/jpeg" />
        <input onChange={handleChange} value={images.image4} type="file"
          name="image4"
          accept="image/png, image/jpeg" />
        <input onChange={handleChange} value={images.image5} type="file"
          name="image5"
          accept="image/png, image/jpeg" /> */}

        {/* NEED TO ADD PHOTOS TO THIS FORM */}

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Register My RV!</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ListRv