import React from 'react'
import ProductReadComponent from '../../components/products/ProductReadComponent'
import { useParams } from 'react-router-dom'
//http://localhost:3000/products/read/71?page=1&size=10
const ProductReadPage = () => {
  const {pno} = useParams()
  console.log("pno: ", pno)
  return (
    <>
      <div className='mb-5'>ProductReadPage</div>
      <ProductReadComponent pno={pno} />
    </>
  )
}

export default ProductReadPage