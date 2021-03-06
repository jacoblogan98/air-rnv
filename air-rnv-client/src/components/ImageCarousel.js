import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

function ImageCarousel({ photos }) {
  const renderCarousel = photos.map((photo) => {
    return (
      <Carousel.Item key={photo.id}>
        <img 
          className='d-block mx-auto h-100 w-75 image_carousel'
          src={photo.url}
          alt="RV-Pic"
        />
      </Carousel.Item>
    )
  })
  return (
    <Container>
      <Carousel variant="dark">
        {renderCarousel}
      </Carousel>
    </Container>
    
  )
}

export default ImageCarousel