/*
    Hexa Board API 호출용 Ajax 페이지 입니다
*/
import axios from "axios";

export const HEXA_API_SERVER = "http://localhost:8050"
const board_path = `${HEXA_API_SERVER}/api/board`

// 카테고리별 게시판 조회 (notice, faq)
export const getCategoryList = async(category) => {
    const res = await axios.get(`${board_path}?category=${category}`)
    console.log("getCategoryList() API Called from Reactside")
    return res.data
}

// id로 게시판 상세 내역 조회
export const getCategoryBoardDetailById = async(board_id) => {
    const res = await axios.get(`${board_path}/${board_id}`)
    console.log("getCategoryBoardDetailById() API Called from Reactside")
    return res.data
}

// 게시글 등록 (adminOnly)
export const postAddNewBoard = async(postData) => {
    const res = await axios.post(`${board_path}/`, postData)
    console.log("postAddNewBoard() API Called from Reactside")
    return res.data
}

// 게시글 수정 (adminOnly)
export const updateBoardById = async(updateData) => {
    const res = await axios.put(`${board_path}/${updateData.id}`, updateData)
    console.log("updateBoardById() API Called from Reactside")
    return res.data
}