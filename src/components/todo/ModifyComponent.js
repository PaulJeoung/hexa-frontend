import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { deleteOne, getOne, putOne } from '../../api/todoApi'
import useCustomMove from '../../hooks/useCustomMove'
import ResultModal from '../common/ResultModal'
//데이터를 가져와야 한다
const initState = {
    tno: 0,
    title: '',
    content: '',
    dueDate: 'null',
    complete: false
}

const ModifyComponent = ({tno}) => {
    const [todo, setTodo]= useState({...initState})

    //결과 데이터가 있으면 resultModal을 보여준다.
    const [result, setResult] = useState(null)

    const { moveToList, moveToRead} = useCustomMove()

    useEffect(()=>{
        getOne(tno).then(data => setTodo(data))
    }, [tno])

    const handleChangeTodo = (e) => {
         todo[e.target.name]= e.target.value
         setTodo({...todo})
    }

    const handleChangeTodoComplete = (e) => {
         const value = e.target.value
         todo.complete = (value === 'Y')
         setTodo({...todo})
    }

    //수정버튼 클릭
    const handleClickModify = () => {
        putOne(todo).then(data => {
            console.log("수정완료" + data)
            setResult('Modified')
        })
    }

    //삭제버튼 클릭
    const handleClickDelete = () => {
        deleteOne(tno).then(data => {
            console.log("삭제완료" + data)
            setResult('Deleted')
        })
    }

    const closeModal = () => {
        if(result === 'Deleted') {
            moveToList()
        } else {
            moveToRead(tno)
        }     
    }

  return (
    <>
        {result ?  <ResultModal title={'처리결과'} content={result} callbackFn={closeModal}/> : <></>}
        <Form.Group className="mb-3" controlId="titleForm.ControlInput1">
            <Form.Label>TNO</Form.Label>
            <Form.Control type={"text"} name="tno" value={todo.tno} onChange={handleChangeTodo} disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="titleForm.ControlInput1">
            <Form.Label>TITLE</Form.Label>
            <Form.Control type={"text"} name="title" value={todo.title} onChange={handleChangeTodo}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contentForm.ControlInput1">
            <Form.Label>CONTENT</Form.Label>
            <Form.Control type={"text"} name="content" value={todo.content} onChange={handleChangeTodo}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>DUEDATE</Form.Label>
            <Form.Control type={"date"} name="dueDate" value={todo.dueDate} onChange={handleChangeTodo} />
        </Form.Group>
        <Form.Select aria-label="COMPLETE"
            value={todo.complete ? 'Y' : 'N'}
            onChange={handleChangeTodoComplete}
        >
            <option value="Y">Completed</option>
            <option value="N">Not yet</option>
        </Form.Select>

        <div className='mt-3 text-end'>
            <Button variant="primary" className='me-3' onClick={handleClickModify}>수정</Button>
            <Button variant="secondary" onClick={handleClickDelete}>삭제</Button>
        </div>
    </>
  )
}

export default ModifyComponent