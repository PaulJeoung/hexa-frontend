import React from 'react'
import ProductCarousel from '../components/common/ProductCarousel'
import ProductCategory from '../components/common/ProductCategory'


const MainPage = () => {

  const items = [1,2,3,4,5,6,7]
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