import React from 'react'

const QnAListComponent = () => {
  return (
    <>
      <div>
        <h3>Q&A 게시판</h3>
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>How to ask a question?</td>
              <td>2024-01-02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default QnAListComponent