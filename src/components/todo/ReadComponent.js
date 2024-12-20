import React, { useEffect, useState } from 'react'
import { getOne } from '../../api/todoApi';
import { Card, Button } from 'react-bootstrap';
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    tno:0,
    title:'',
    content:'',
    dueDate:null,
    complete:false
}

const ReadComponent = ({tno}) => {
    const [todo, setTodo] = useState(initState);
    const { moveToList, moveToModify } = useCustomMove()
    useEffect(()=>{
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })
    }, [tno])
  return (
    <>
        {makeDiv('Tno', todo.tno)}
        {makeDiv('title', todo.title)}
        {makeDiv('content', todo.content)}
        {makeDiv('dueDate', todo.dueDate)}
        {makeDiv('complete', todo.complete ? 'Complete' : 'Not Yet')}
        <div className='mt-3 text-end'>
          <Button variant='primary'  className='me-3' onClick={moveToList}>목록보기</Button>
          <Button variant='secondary' onClick={() => moveToModify(tno)}>수정</Button>
        </div>
    </>
  )
}

function makeDiv(title, value) {
    return (
      <Card className="mx-auto mb-2">
        <Card.Body className='d-flex'>
          <Card.Title className='w-25 text-primary'>{title}</Card.Title>
          <Card.Text>
            : { value }
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default ReadComponent