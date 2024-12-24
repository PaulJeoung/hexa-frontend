import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const ProductCategory = () => {
  const productName = "NIKE AIRMAX 2025"
  const productCategory = ["신상", "브랜드", "럭셔리", "컬렉션", "사이즈", "가격대"]
  const sampleImage = [
    "../images/raw1.jpg","../images/raw2.jpg","../images/raw3.jpg",
    "../images/raw4.jpg","../images/raw5.jpg","../images/raw6.jpg"]
  
  return (
    <>
      <Container>
      {productCategory.map((category, index) => (
        <React.Fragment key={index}>
          <Row className="text-start mb-2">
            <h5>{category}</h5>
          </Row>
          <Row className="text-center mt-3">
            {sampleImage.map((image, idx) => (
              <Col lg={2} md={4} sm={6} key={idx}>
                <Image src={image} roundedCircle fluid />
                <p className="mt-2">{productName}</p>
              </Col>
            ))}
          </Row>
        </React.Fragment>
      ))}
    </Container>
    </>
  )
}

export default ProductCategory