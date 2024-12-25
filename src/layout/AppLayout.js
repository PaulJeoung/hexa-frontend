import React from 'react'
import {Nav, Navbar, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import MenuNav from './MenuNav'


const AppLayout = () => {
    const loginState = useSelector(state => state.loginSlice)
  return (
    <div>
        <MenuNav />
        {/* <Navbar expand="lg" className="bg-body-tertiary mb-5">
            <Container>
                <Navbar.Brand href="/">HEXACEPS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">about</Nav.Link>
                    { loginState.email ?
                    <>
                        <NavDropdown title="todo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/todo/add">add</NavDropdown.Item>
                            <NavDropdown.Item href="/todo/list">
                                list
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products/add">add</NavDropdown.Item>
                            <NavDropdown.Item href="/products/list">
                                list
                            </NavDropdown.Item>
                        </NavDropdown>
                    </>
                    : <></>
                    }
                    
                </Nav>
                <Nav>
                    {loginState.email ? 
                        <Nav.Link href="/member/logOut">LogOut</Nav.Link>
                        :
                        <Nav.Link href="/member/login">Login</Nav.Link>
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}
        <div className='d-flex justify-content-center'>
            <hr className='border border-dark border-2 opacity-50 ' style={{ width : "95%" }} />
        </div>
        <Container>
            <Row>
                <Col md="12"><Outlet /></Col>
                {/* <Col md="3" className='border-start'>
                    <div>sidebar</div>
                    <p>호구도네이션</p>
                    <div className='mt-5'>
                        <a href="https://link.kakaopay.com/_/CHQDCNE" ><img src="../images/kakaopay.png" alt="카카오 송금" /></a>
                    </div>
                </Col> */}
            </Row>
        </Container>
        <div className='bg-body-tertiary border-top mt-5 py-2 text-center'>
           ALL RIGHT RESERVED BY ⓒ HEXACEPS 2024
        </div>
    </div>
  )
}

export default AppLayout