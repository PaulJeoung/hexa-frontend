import axios from 'axios'

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

//특정번호의 todo조회
//http://localhost:8080/api/todo/50
export const getOne = async(tno) => {
    const res = await axios.get(`${prefix}/${tno}`)
    return res.data
}

//list
//http://localhost:8080/api/todo/list?page=3
export const getList = async(pageParam) => {
    const {page, size} = pageParam
    const res = await axios.get(`${prefix}/list`, {params : {page:page, size:size}})
    return res.data
}

// 데이터추가
export const postAdd = async(todoobj) => {
    const res = await axios.post(`${prefix}/`, todoobj)
    return res.data
}

//수정 put  /tno
export const putOne = async(todo) => {
    const res = await axios.put(`${prefix}/${todo.tno}`, todo)
    return res.data
}

//삭제  delete  /todo
export const deleteOne = async(todo) => {
    const res = await axios.delete(`${prefix}/${todo}`)
    return res.data
}