import React from 'react'
import ProductModifyComponent from '../../components/products/ProductModifyComponent'
import { useParams } from 'react-router-dom'

const ProductModifyPage = () => {
  const {pno} = useParams()
  return (
    <>
    <div className='mb-5'>ProductModifyPage</div>
    <ProductModifyComponent pno = {pno} />
    </>
  )
}

export default ProductModifyPage