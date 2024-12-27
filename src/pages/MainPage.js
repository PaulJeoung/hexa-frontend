import React from 'react'
import ProductCarousel from '../components/common/ProductCarousel'
import ProductCategory from '../components/common/ProductCategory'
import MainCarousel from '../components/common/MainCarousel'
import MainImageSlider from '../components/common/MainImageSlider'


const MainPage = () => {

  const items = [
    "/images/raw1.jpg","/images/raw2.jpg","/images/raw3.jpg",
    "/images/raw4.jpg","/images/raw5.jpg","/images/raw6.jpg",
    "/images/raw1.jpg","/images/raw2.jpg","/images/raw3.jpg",
    "/images/raw4.jpg","/images/raw5.jpg","/images/raw6.jpg"]
  return (
    <>
      <div>MainPage</div>
      {/* <ProductCarousel items = {items} initialActive={0}/> */}
      <MainCarousel />
      <div>메인 캐러셀</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 1</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 2</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 3</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 4</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 5</div>
      <MainImageSlider items = {items} />
      <div>슬라이드 6</div>
      <ProductCategory />
      <div>카테고리1</div>
    </>
  )
}

export default MainPage