import React from 'react'
import { Table } from 'react-bootstrap'

const NoticeListComponent = () => {
  return (
    <>
      <div className='ms-3'>
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
              <td>HEXACEPS 설날 고객센터 영엽시간 변경 안내</td>
              <td>2025-01-11</td>
              <td>관리자</td>
            </tr>
            <tr>
              <td>2</td>
              <td>HEXACEPS 설날 일부 지역 배송 지연 안내</td>
              <td>2025-01-13</td>
              <td>관리자</td>
            </tr>
          </tbody>

        </Table>
      </div>
    </>
  )
}

export default NoticeListComponent