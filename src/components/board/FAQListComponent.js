import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

const FAQListComponent = () => {
  const navigate = useNavigate();
    const search = (e) => {
      if(e.key === "Enter") {
        e.preventDefault();
        console.log("Enter 확인", e.key, e.target.value);
        let keyword = e.target.value;
        navigate(`/?q=${keyword}`);
      }
    }
  
  return (
    <>
      <div className='ms-3'>
        <div className="" style={{width : "50%", margin : "0 auto"}}>
          <form className='border border-dark rounded-pill mb-3 d-flex justfy-content-end align-items-center help' role='search'>
            <Search className='ms-3'/>
            <input className='form-control me-2 border-0 border-bottom' type='search' placeholder='Search' 
            onKeyDown={(e) => search(e)}/>
          </form>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>중계사이트 이용시 구매 오류 문제</td>
              <td>2025-01-11</td>
              <td>관리자</td>
            </tr>
            <tr>
              <td>2</td>
              <td>상품 반품 할때 반송 방법을 알고 싶어요</td>
              <td>2025-01-13</td>
              <td>관리자</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default FAQListComponent