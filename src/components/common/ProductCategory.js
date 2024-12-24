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
        <Container >
          {
            productCategory.map(category => {
              <Row className='text-start'>{category}</Row>
              {
                <Row className='text-center mt-3'>
                {
                  sampleImage.map(list => 
                      <Col lg={2} md={4} sm={6}><Image src={list} roundedCircle/>{productName}</Col>
                  )
                }
                </Row>
              }
            })}
            {/* <Row className='text-start'></Row>
            <Row className='text-center mt-3'>
                {
                    sampleImage.map(list => 
                        <Col lg={2} md={4} sm={6}><Image src={list} roundedCircle/>{productName}</Col>
                    )
                }
            </Row> */}
        </Container>
    </>
  )
}

export default ProductCategory