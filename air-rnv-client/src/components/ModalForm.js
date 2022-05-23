/// import React, { useState } from 'react'

// function ModalForm({ filteredList }) {
//     let pet_friendly
//     let tv 
//     let shower 
//     let air_conditioned
//     const allAmenities = []
//     allAmenities.push(pet_friendly, tv, shower, air_conditioned)
//     const [selectedAmenities, setSelectedAmenities] = useState([])

//     const handleSelect = amenity => {
//         const isSelected = selectedAmenities.includes(amenity)

//         const newSelection = isSelected ? selectedAmenities.filter(checkedAmenity => checkedAmenity !== amenity)
//             : [...selectedAmenities, amenity];
//         setSelectedAmenities(newSelection)
//     }

//     console.log(allAmenities)



//   return (
//             <>
//                 <form>
//                     {/* >>>>>>>>>> Prices <<<<<<<<<< */}
//                     <div className="prices-data">
//                         <h5>Price</h5>

//                         <div>
//                             <input
//                                 type="range"
//                                 className="form-control-range"
//                                 id="formControlRange"
//                             />
//                         </div>

//                         <input type="text" placeholder="$ min" />
//                         <input type="text" placeholder="$ max" />
//                     </div>

//                     <br />

//                     {/* >>>>>>>>>> Class - Radio Buttons <<<<<<<<<< */}
//                     <h5>Class</h5>

//                     <div className="class-data">
//                         <div className="form-check">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 value=""
//                                 name="class"
//                             />

//                             <label className="form-check-label">
//                                 Class: A
//                             </label>
//                         </div>

//                         <div className="form-check">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 value=""
//                                 name="class"
//                             />

//                             <label className="form-check-label">
//                                 Class: B
//                             </label>
//                         </div>

//                         <div className="form-check">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 value=""
//                                 name="class"
//                             />

//                             <label className="form-check-label">
//                                 Class: C
//                             </label>
//                         </div>
//                     </div>
//                     <br />

//                     {/* >>>>>>>>>> Boolean Values <<<<<<<<<< */}

//                     <h5>Amenities</h5>
//                     {allAmenities.map((amenity, index) => {
//             const isSelected = selectedAmenities.includes(amenity);
//             return <>
//                 <label key={index}>{amenity}</label>
//                 <input
//                     type="checkbox"
//                     checked={isSelected}
//                     onChange={() => handleSelect(amenity)}
//                     />
//             </>
//         })}

//                     {/* <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="pet_friendly"
//                         />

//                         <label className="form-check-label">
//                             Pet Friendly
//                         </label>
//                     </div> */}
//                     {/* TV */}
//                     {/* <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="air_conditioned"
//                         />

//                         <label className="form-check-label">
//                             TV
//                         </label>
//                     </div>
//  */}
//                     {/* Air Conditioned */}
//                     {/* <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="air_conditioned"
//                         />

//                         <label className="form-check-label">
//                             Air Conditioned
//                         </label>
//                     </div> */}

//                     {/* Shower */}
//                     {/* <div className="form-check">
//                         <input
//                             className="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="shower"
//                         />

//                         <label className="form-check-label">
//                             Shower
//                         </label>
//                     </div>
//                     <br /> */}

//                     {/* >>>>>>>>>> Other Basics <<<<<<<<<< */}
//                     <h5>Misc.</h5>
//                     <input type="text" placeholder="Year"></input>
//                 </form>
//             </>
//         )
//     }

//     export default ModalForm


import React from 'react'

function ModalForm() {
  return (
    <>
        <form>
            {/* >>>>>>>>>> Prices <<<<<<<<<< */}
            <div className="prices-data">
                <h5>Price</h5>

                <div>
                    <input
                        type="number"
                        className="form-control-range"
                        id="formControlRange"
                    />
                </div>

                <input type="text" placeholder="$ min" />
                <input type="text" placeholder="$ max" />
            </div>

            <br />

            {/* >>>>>>>>>> Class - Radio Buttons <<<<<<<<<< */}
            <h5>Class</h5>

            <div className="class-data">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        value=""
    
                    />

                    <label className="form-check-label">
                        Class: A
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        value=""
    
                    />

                    <label className="form-check-label">
                        Class: B
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        value=""
    
                    />

                    <label className="form-check-label">
                        Class: C
                    </label>
                </div>
            </div>
            <br />

            {/* >>>>>>>>>> Boolean Values <<<<<<<<<< */}
            <h5>Amenities</h5>
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="pet_friendly"
                />

                <label className="form-check-label">
                Pet Friendly
                </label>
            </div>

            {/* Air Conditioned */}
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="air_conditioned"
                />

                <label className="form-check-label">
                Air Conditioned
                </label>
            </div>

            {/* TV */}
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="air_conditioned"
                />

                <label className="form-check-label">
                TV
                </label>
            </div>

            {/* Shower */}
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                name="shower"
                />

                <label className="form-check-label">
                Shower
                </label>
            </div>
            <br />
            
            {/* >>>>>>>>>> Other Basics <<<<<<<<<< */}
            <h5>Misc.</h5>
            <input type="text" placeholder="Year"></input>
        </form>
    </>
  )
}

export default ModalForm