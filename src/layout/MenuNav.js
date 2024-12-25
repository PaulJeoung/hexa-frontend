import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Person, Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
// import OffMenu from './OffMenu';
import OffMenu from './OffMenu'

const Navbar = () => {
    const menuList = ['신상', '브랜드', '럭셔리', '컬렉션', '사이즈', '가격대']
    const mainList = [
      {
        "id": "helpdesk",
        "name": "고객센터",
        "path": "/helpdesk"
      },
      {
        "id": "cart",
        "name": "카트",
        "path": "/order/cart"
      },
      {
        "id": "mypage",
        "name": "마이페이지",
        "path": "/member"
      },
      {
        "id": "like",
        "name": "관심상품",
        "path": "/order/like"
      },
      {
        "id": "login",
        "name": "로그인",
        "path": "/join"
      },
    ]
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate("/login")
    }
    const goToJoin = () => {
      navigate("/member/join")
    }
    const goToHome =() => {
      navigate("/");
    }
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
      <Container>
        <div className='d-flex justify-content-end align-items-center' >
          <div className="me-2 mt-2 pointer" onClick={goToHome} style={{ fontSize: '0.8rem' }} >고객센터</div>
          <div className="me-2 mt-2 pointer" onClick={goToHome} style={{ fontSize: '0.8rem' }} >마이쇼핑</div>
          <div className="me-2 mt-2 pointer" onClick={goToLogin} style={{ fontSize: '0.8rem' }} >마이페이지</div>
          <div className="me-2 mt-2 pointer" onClick={goToHome} style={{ fontSize: '0.8rem' }} >관심</div>
          <div className='me-2 mt-2 pointer' onClick={goToJoin} style={{ fontSize: '0.8rem' }} >로그인</div>
        </div>
        
        {/* <div className='text-center d-none d-md-block'>
          <Link to="/">
            <img src='../images/logo.png' alt='로고' width={100}/>
          </Link>
        </div> */}
        <div className='d-none d-md-block'>
          <Row className='mt-5'>
            <Col lg={1}></Col>
            <Col lg={1}>
              <Link to="/">
              <img src='../images/logo.png' alt='로고' width={100}/>
              </Link>
            </Col>
            <Col lg={6} className='text-center'>
              <ul className='list-unstyled d-flex justify-content-center mt-2'>
                {menuList.map(menu => <li className='ms-3 fw-bold'>{menu}</li>)}
              </ul>
            </Col>
            <Col lg={3}>
              <form className='border border-dark rounded mb-3 d-flex justfy-content-end align-items-center help' role='search'>
                <Search className='ms-3'/>
                <input className='form-control me-2 border-0 border-bottom' type='search' placeholder='Search' 
                onKeyDown={(e) => search(e)}/>
              </form>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </div>
        <div className='d-md-none'>
          <OffMenu menuList={menuList} />
          <Link to="/">
              <img src='../images/logo.png' alt='로고' width={100}/>
          </Link>
          <form className='border border-dark rounded mb-3 d-flex justfy-content-end align-items-center help' role='search' width={150}>
            <Search className='ms-3'/>
            <input className='form-control me-2 border-0 border-bottom' type='search' placeholder='Search' 
            onKeyDown={(e) => search(e)}/>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Navbar