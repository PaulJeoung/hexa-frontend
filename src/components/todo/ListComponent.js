import React, { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove'
import { getList } from '../../api/todoApi'
import { Table } from 'react-bootstrap'
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

const ListComponent = () => {
    const {page, size, moveToList, refresh, moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)

    useEffect(()=>{
        getList({page, size}).then(data => {
            console.log(data)
            setServerData(data)
        })
    }, [page, size, refresh])
  return (
    <>
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th className='w-75'>title</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {serverData.dtoList.map( todo =>
        <tr>
            <td className='text-center'>{todo.tno}</td>
            <td
                onClick={() => moveToRead(todo.tno)}
                style={{cursor: 'pointer'}}
            >{todo.title}</td>
            <td className='text-center'>{todo.dueDate}</td>
        </tr>
        )}
      </tbody>
    </Table>
    <PageComponent serverData={serverData} moveToList={moveToList}/>
    </>
  )
}

export default ListComponent