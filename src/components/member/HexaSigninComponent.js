import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
// 약관 참고 : https://choijying21.tistory.com/entry/TIL-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EC%A0%84%EC%B2%B4-%EC%84%A0%ED%83%9D-%EB%B0%8F-%EC%95%BD%EA%B4%80-%EB%8F%99%EC%9D%98-%ED%99%94%EB%A9%B4-%EA%B5%AC%ED%98%84
// 약관 샘플 : https://shoeathe.com/member/agreement.html

const HexaSigninComponent = () => {
  const [checkItems, setCheckItems] = useState([]);
  const [openStates, setOpenStates] = useState({});

  const data = [
    { id: 0, title: '멤버십 이용약관 동의', contents: '멤버십 필수 약관에 동의합니다.', status: '(필수)' },
    { id: 1, title: '개인정보 처리방침 동의', contents: '이용약관\n\nHEXACEPS 서비스 이용약관\n\n제1조(목적)\n이 약관은 "회원" 개인 상호 간 또는 “제휴 사업자”, "입점 사업자"와 “회원” 개인 간에 상품 등을 매매하는 것을 중개하고, "상품" 등에 관한 정보를 상호 교환할 수 있도록 헥사캡스 주식회사(이하 "회사"라 합니다)가 운영, 제공하는 HEXACEPS 서비스(이하 "서비스")에 대한 것으로 본 약관에서는 "서비스"의 이용과 관련하여 "회사"와 "회원"과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정합니다.', status: '(필수)' },
    { id: 2, title: '위치정보 이용 약관 동의', contents: '위치정보 수집에 동의 합니다', status: '(필수)' },
    { id: 3, title: 'SMS 및 마케팅 정보 수신 동의', contents: '수집된 정보로 SMS또는 Email등으로 HEXACEPS 서비스의 정보는 수신하는데 동의 합니다', status: '(선택)' },
    { id: 4, title: '만 14세 이상임에 동의', contents: '만 14세 이상이며, 법적 문제 발생 시 당사에서는 어떠한 책임을 지지 않습니다', status: '(필수)' },
  ];

  const selectChecked = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems((prev) => prev.filter((other) => other !== id));
    }
  };

  const allChecked = (checked) => {
    if (checked) {
      setCheckItems(data.map((item) => item.id));
    } else {
      setCheckItems([]);
    }
  };

  const toggleOpen = (id) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container>
      <Row><h3>회원가입</h3></Row>
      <Row>
        <Col>
          <Form>
            <Form.Label className="mt-4">이름 *</Form.Label>
            <Form.Control type="text" placeholder="예) 홍길동" />

            <Form.Label className="mt-4">비밀번호 *</Form.Label>
            <Form.Control type="password" placeholder="영문, 숫자 조합 8~16자" />

            <Form.Label className="mt-4">비밀번호 확인 *</Form.Label>
            <Form.Control type="password" placeholder="영문, 숫자 조합 8~16자" />
            
            <Form.Label className="mt-4">이메일 *</Form.Label>
            <InputGroup>
                <Form.Control type="email" placeholder="예) hexaceps@hexaceps.com" />
                <Button variant='outline-warning'>인증하기</Button>
            </InputGroup>

            <Form.Label className="mt-4">이메일 인증 확인 *</Form.Label>
            <InputGroup>
                <Form.Control type="text" placeholder="수신 받은 메일의 가입 코드를 입력해 주세요" />
                <Button variant='outline-warning'>코드전송</Button>
            </InputGroup>
          </Form>
        </Col>
        <Col>
          <div className='mt-5 ms-5'>
            <label className='mb-3'>
                <input type="checkbox" onChange={(e) => allChecked(e.target.checked)} checked={checkItems.length === data.length}/>
                &nbsp;모두 동의합니다.
            </label>
            {data.map((item) => (
                <div key={item.id} className='mt-1'>
                <label>
                    <input
                    type="checkbox"
                    onChange={(e) => selectChecked(e.target.checked, item.id)}
                    checked={checkItems.includes(item.id)}
                    />
                    <span style={{ color: item.status === '(필수)' ? 'red' : 'gray' }}>
                    &nbsp;{item.status}&nbsp;
                    </span>
                    {item.title}
                </label>
                {openStates[item.id] ? (
                    <MdOutlineKeyboardArrowUp size={30} onClick={() => toggleOpen(item.id)} />
                ) : (
                    <MdOutlineKeyboardArrowDown size={30} onClick={() => toggleOpen(item.id)} />
                )}
                {openStates[item.id] && <div><p>{item.contents}</p></div>}
                </div>
            ))}
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <Button variant='secondary' style={{width : "80%"}} className='mt-5'>다음</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HexaSigninComponent;
