import React, { useState } from 'react'
import '../../App.css'
import { Container, Carousel, Row, Col } from 'react-bootstrap'


const ProductCarousel = ({ items, initialActive=0 }) => {
  const [active, setActive] = useState(initialActive)
  const [direction, setDirection] = useState("")
  const moveLeft = () => {
    setActive((prevActive) => {
        const newActive = prevActive - 1
        return newActive < 0 ? items.length - 1 : newActive
    })
    setDirection("left")
  }

  const moveRight = () => {
    setActive((prevActive) => (prevActive + 1) % items.length)
    setDirection("right")
  }

  const generateItem = () => {
    const itemElements = []
    for (let i = active - 2; i < active + 3; i++) {
        const index = (i + items.length) % items.length // 순환 인덱스
        const level = active - i
        itemElements.push(<Item key = {index} id = {items[index]} level = {level} />)
    }
    return itemElements
  }
  return (
    <>
        <Container>
            <Row>
                <Col md={6}>
                    <div id="carousel" className='noselect'>
                        <div className='arrow arrow-left' onClick={ moveLeft }>
                            <i className='fl-arrow-left'></i>
                        </div>
                        <div className= {`transition-group ${direction}`}>
                            { generateItem() }
                        </div>
                        <div className='arrow arrow-right' onClick={ moveRight }>
                            <i className='fl-arrow-right'></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

const Item = ({ id, level }) => {
    const className = `item level${level}`
    return <div className={className}>{id}</div>
}

export default ProductCarousel