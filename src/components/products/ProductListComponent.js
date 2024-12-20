import React, { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove'
import { productGetList } from '../../api/productsApi'
import FetchingModal from '../common/FetchingModal'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { API_SERVER_HOST } from '../../api/todoApi'
import PageComponent from '../common/PageComponent'

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ProductListComponent = () => {
    const {page, size, moveToList, refresh, moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)
    const [fetching, setFetching] = useState(false)
    const host = API_SERVER_HOST

    useEffect(() => {
        setFetching(true)
        productGetList({page, size}).then(data => {
            console.log(data)
            setServerData(data)
            setFetching(false)
        })

    }, [page, size, refresh])

  return (
    <>
        {fetching ? <FetchingModal /> : <></>}
        <Container>
            <Row>
                {serverData.dtoList.map(product => 
                    <Col md={6}>
                        <Card className='mb-5'>
                            <Card.Img variant="top" 
                            src={`${host}/api/products/view/s_${product.uploadFileNames[0]}`} 
                            />
                            <Card.Body>
                                <Card.Title>{product.pname}</Card.Title>
                                <Card.Text>
                                    <p>
                                        NO : {product.pno}<br />
                                        가격 {product.price}: 
                                    </p>
                                </Card.Text>
                                <Button variant="outline-info" onClick={() => moveToRead(product?.pno)}>상품상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            <PageComponent serverData={serverData} moveToList={moveToList} />
        </Container>
    </>
    
  )
}

export default ProductListComponent