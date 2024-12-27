import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// 카카오로그인 리소스 https://developers.kakao.com/tool/resource/login
// 구글로그인 리소스 https://developers.google.com/identity/branding-guidelines?hl=ko#matching
// 연동로그인 구현 https://velog.io/@jpy1030/TIL-231212React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

const HexaJoinComponent = () => {
  const navigate = useNavigate();
  const goToSignin = () => {
    console.log("회원가입 가고 있냐????")
    navigate("/member/signin")
  }
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div style={{ width: "50%" }}>
        <Row className="text-center mb-4">
          <h3>로그인</h3>
        </Row>
        <Row>
          <Col>
            <Form className="text-center">
              <Form.Control type="email" placeholder="이메일" className="mb-3" style={{ width: "80%", margin: "0 auto" }} />
              <Form.Control type="password" placeholder="비밀번호" className="mb-3" style={{ width: "80%", margin: "0 auto" }} />
            </Form>
            <div className="text-center mt-3">
              <Button className="mt-3 custom-button" style={{ width: "80%", backgroundColor: "#625244", borderColor: "#625244", borderRadius: "30px", }}>
                로그인
              </Button>
              <p className="mt-3">계정이 필요하세요?</p>
              <Button className="mt-3 custom-button" style={{ width: "80%", backgroundColor: "#625244", borderColor: "#625244", borderRadius: "30px", }} onClick={() => goToSignin()}>
                회원가입
              </Button>
              <p className="mt-3">계정 찾기</p>
            </div>
            <div className="text-center mt-5">
              <p><a href='#' ><img src="../images/google_login.png" alt='구글로그인' style={{ width : "70%", height : "40px", borderRadius: "30px"}}/></a></p>
              <p><a href='#' ><img src="../images/kakao_login.png" alt='카카오로그인' style={{ width : "70%", border : "black", borderRadius: "30px"}}/></a></p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HexaJoinComponent;
