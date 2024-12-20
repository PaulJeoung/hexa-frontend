import React from 'react'
import { useParams} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ReadComponent from '../../components/todo/ReadComponent'

const ReadPage = () => {
  const {tno} = useParams()
 
  return (
    <>
    <Container>
      <div className='my-5'>{tno} 번 data</div>
      <ReadComponent tno={tno}/>
    </Container>
    </>
  )
}

export default ReadPage