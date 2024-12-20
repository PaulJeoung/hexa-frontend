/*
    Here defined about api spectification for Ajax communications.
*/
import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const host = `${API_SERVER_HOST}/api/products`

// product 데이터 추가
export const productPostAdd = async(product) => {
    console.log("productPostAdd() axios rest api 호출");
    const header = { Headers: { "Content-Type" : "multipart/form-data" }}
    const res = await axios.post(`${host}/`, product, header);
    return res.data;
}

// product 리스트 조회
export const productGetList = async(pageParam) => {
    console.log("productGetList() axios rest api 호출");
    const { page, size } = pageParam
    const res = await axios.get(`${host}/list`, { params : { page : page, size : size }})
    return res.data;
}

// 특정 번호 조회 (수정할때도 사용)
export const productGetOne = async(pno) => {
    console.log("productGetOne() axios rest api 호출")
    console.log(`${host}/${pno}`)
    const res = await axios.get(`${host}/${pno}`)
    return res.data
}

// 수정 put 
export const productPutOne = async(pno, product) => {
    console.log("productPutOne() axios rest api 호출 {}", pno);
    const header = { Headers : { "Content-Type" : "multipart/form-data"} }
    const res = await axios.put(`${host}/${pno}`, product, header)
    return res.data
}

// todo 데이터 삭제
export const productDeleteOne = async(pno) => {
    console.log("productDeleteOne() axios rest api 호출 {}", pno);
    const res = await axios.delete(`${host}/${pno}`);
    console.log("productDeleteOne() axios rest api 호출완료 : ", `${host}/${pno}`);
    return res.data;
}