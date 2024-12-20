import React, { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove';
import { productGetOne } from '../../api/productsApi';
import { API_SERVER_HOST } from '../../api/todoApi';
import FetchingModal from '../common/FetchingModal';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    uploadFileNames: []
}

const host = API_SERVER_HOST;

const ProductReadComponent = ({pno}) => {
    const [product, setProduct]= useState(initState);

    //화면 이동용 함수
    const {moveToList, moveToModify} = useCustomMove();

    //fetching
    const [fetching, setFetching] = useState(false)

    useEffect(()=>{
        setFetching(true)
        productGetOne(pno).then(data => {
            setProduct(data)
            setFetching(false)
        })
    }, [pno])
  return (
    <>
        {fetching ? <FetchingModal /> : <></>}
        <Container>
            <Row>
                <Col md={6}>
                    <Image
                    src={`${host}/api/products/view/${product.uploadFileNames[0]}`} fluid />
                </Col>
                <Col md={6}>
                    <p>상품번호 : {product.pno} </p>
                    <p>상품명 : {product.pname}</p>
                    <p>가격 : {product.price} </p>
                    <p>상세설명 : {product.pdesc}</p>
                    <hr />
                    <div className='mt-3 text-end'>
                        <Button variant='primary' onClick={() => moveToList()} className='me-3'>목록보기</Button>
                        <Button variant='secondary' onClick={() => moveToModify(pno)}>수정</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <h5>상세이미지보기</h5>
                    {product.uploadFileNames.map((imgFile, i) =>
                        <Image
                            src={`${host}/api/products/view/${imgFile}`}
                        />)}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ProductReadComponent