import React from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const HelpDeskLayout = () => {
  return (
    <>
        <Container>
            <Nav className='justify-content-start ' variant="tabs" defaultActiveKey="/board/notice">
                <Nav.Item>
                    <LinkContainer to="/board/notice">
                        <Nav.Link >NOTICE</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/board/faq">
                        <Nav.Link >FAQ</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/board/qna">
                        <Nav.Link >Q&A</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Container>
    </>
  )
}

export default HelpDeskLayout