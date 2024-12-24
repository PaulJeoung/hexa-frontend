import React from 'react'
import ProductCarousel from '../components/common/ProductCarousel'
import ProductCategory from '../components/common/ProductCategory'


const MainPage = () => {

  const items = [
    "../images/raw1.jpg","../images/raw2.jpg","../images/raw3.jpg",
    "../images/raw4.jpg","../images/raw5.jpg","../images/raw6.jpg"]
  return (
    <>
      <div>MainPage</div>
      <ProductCarousel items = {items} initialActive={0}/>
      <div>슬라이드</div>
      <ProductCategory />
      <div>카테고리1</div>
    </>
  )
}

export default MainPage