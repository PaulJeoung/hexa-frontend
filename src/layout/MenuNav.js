import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Person, Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
// import OffMenu from './OffMenu';

const Navbar = () => {
    const menuList = ['신상', '브랜드', '럭셔리', '컬렉션', '사이즈', '가격대'];
  
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate("/login")
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
        <div className='d-flex justify-content-end align-items-center mt-2 pointer' onClick={goToLogin}>
          <div className="me-2" style={{ fontSize: '0.8rem' }}>고객센터</div>
          <div className="me-2" style={{ fontSize: '0.8rem' }}>마이쇼핑</div>
          <div className="me-2" style={{ fontSize: '0.8rem' }}>마이페이지</div>
          <div className="me-2" style={{ fontSize: '0.8rem' }}>관심</div>
          <Person /><div className='ms-2' style={{ fontSize: '0.8rem' }}>로그인</div>
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
              <form className='mb-3 d-flex justfy-content-end align-items-center' role='search'>
                <Search />
                <input className='form-control me-2 border-0 border-bottom' type='search' placeholder='Search' 
                onKeyDown={(e) => search(e)}/>
              </form>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </div>
        {/* <div className='d-md-none'>
          <OffMenu menuList={menuList} />
            <img src="../images/logo.png" alt="logo" width={50} onClick={goToHome} className='pointer'/>
        </div> */}
      </Container>
    </>
  )
}

export default Navbar