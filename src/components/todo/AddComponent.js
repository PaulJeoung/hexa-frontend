import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'
import { postAdd } from '../../api/todoApi'
import ResultModal from '../common/ResultModal'
import useCustomMove from '../../hooks/useCustomMove'

const initState = {
    title: '',
    content: '',
    dueDate: ''
}

const AddComponent = () => {

    const [todo, setTodo] = useState(initState)

    //결과 데이터가 있으면 resultModal을 보여준다.
    const [result, setResult] = useState(null)

    const { moveToList } = useCustomMove()

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleClickAdd = () => {
        console.log(todo)
        postAdd(todo).then(result => {
            console.log(result)  // tno:??
            setResult(result.TNO)
            setTodo({...initState})
        }).catch(e => {
            console.error(e)
        })
    }

    const closeModal = () => {
        setResult(null)
        moveToList()
    }
  return (
    <>
    {result? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/> : <></>}
    <Form.Group className="mb-3" controlId="titleForm.ControlInput1">
        <Form.Label>TITLE</Form.Label>
        <Form.Control type={"text"} name="title" placeholder="제목을 입력하세요" onChange={handleChangeTodo}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="contentForm.ControlInput1">
        <Form.Label>CONTENT</Form.Label>
        <Form.Control type={"text"} name="content" placeholder="내용을 입력하세요" onChange={handleChangeTodo}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>DUEDATE</Form.Label>
        <Form.Control type={"date"} name="dueDate" onChange={handleChangeTodo} />
    </Form.Group>
    <Button variant="primary" type="button" onClick={handleClickAdd}>Submit</Button>
    </>
  )
}

export default AddComponent