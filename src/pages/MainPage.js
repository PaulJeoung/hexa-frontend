import React from 'react'
import ProductCarousel from '../components/common/ProductCarousel'
import ProductCategory from '../components/common/ProductCategory'
import MainCarousel from '../components/common/MainCarousel'
import MainImageSlider from '../components/common/MainImageSlider'
import { Container, Row } from 'react-bootstrap'


const MainPage = () => {

  const items = [
    "/images/raw1.jpg","/images/raw2.jpg","/images/raw3.jpg",
    "/images/raw4.jpg","/images/raw5.jpg","/images/raw6.jpg",
    "/images/raw1.jpg","/images/raw2.jpg","/images/raw3.jpg",
    "/images/raw4.jpg","/images/raw5.jpg","/images/raw6.jpg"]

  const images = [
    { title: "NIKE x Scott First Edition", subtitle: "나이키 x 스캇 1ST 에디션", image: "./images/raw1.jpg" },
    { title: "NIKE x Scott Second Level", subtitle: "나이키 x 스캇 2nd 레벨", image: "./images/raw2.jpg" },
    { title: "NIKE x Scott 3rd Ultimate", subtitle: "나이키 x 스캇 3rd 에디션", image: "./images/raw3.jpg" },
    { title: "NIKE x Scott 4th NEW ARRIVAL", subtitle: "나이키 x 스캇 4번쨰 신상", image: "./images/raw4.jpg" },
    { title: "NIKE x Scott Low-Level", subtitle: "나이키 x 스캇 미드로우 에디션", image: "./images/raw5.jpg" },
    { title: "NIKE x Scott Low-Level", subtitle: "나이키 x 스캇 미드로우 에디션", image: "./images/raw6.jpg" },
    { title: "NIKE x Scott Low-Level", subtitle: "나이키 x 스캇 미드로우 에디션", image: "./images/raw3.jpg" },
    { title: "NIKE x Scott Low-Level", subtitle: "나이키 x 스캇 미드로우 에디션", image: "./images/raw5.jpg" },
  ]
  return (
    <>
      <Container fluid style={{height : "450px"}}>
        <MainCarousel images = {images} />
      </Container>
      <Container style={{marginTop : "40px"}}>
        <Row className='mt-5'>
          <h3 className='mt-5'>신상</h3>
          <MainImageSlider items = {items} />
        </Row>
        <Row className='mt-5'>
          <h3>브랜드</h3>
          <MainImageSlider items = {items} />
        </Row>
        <Row className='mt-5'>
          <h3>럭셔리</h3>
          <MainImageSlider items = {items} />
        </Row>
        <Row className='mt-5'>
          <h3>컬렉션</h3>
          <MainImageSlider items = {items} />
        </Row>
        <Row className='mt-5'>
          <h3>사이즈</h3>
          <MainImageSlider items = {items} />
        </Row>
        <Row className='mt-5'>
          <h3>가격대</h3>
          <MainImageSlider items = {items} />
        </Row>
      </Container>      
    </>
  )
}

export default MainPage