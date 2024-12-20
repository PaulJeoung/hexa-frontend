import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login, loginPostAsync } from '../../slices/loginSlice';
import { useNavigate } from 'react-router-dom';
import useCustomLogin from '../../hooks/useCustomLogin';

const initState = {
    email: '',
    pw: '',
}

const LoginComponent = () => {
    const {doLogin, moveToPath } = useCustomLogin()    
    const navigate = useNavigate()


    const [loginParam, setLoginParam]  = useState({...initState})
    const dispatch = useDispatch();

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value;

        setLoginParam({ ...loginParam })
    }

    const handClickLogin = (e) => {
        // dispatch(login(loginParm))
        // dispatch(loginPostAsync(loginParam))
        // .unwrap()
        doLogin(loginParam).then(data => {
            console.log("unwrap 사용 : ", data)
            if (data.error) {
                alert ("로그인 실패")
            } else {
                alert ("로그인 성공")
                moveToPath('/')
                // navigate({ pathname : '/'}, {replace : true})
            }
            
        })
    }
  return (
    <>
            <div className='d-flex justify-content-center my-5'>
                <div className='w-50 mt-5 border p-5'>
                    <Form.Group className="mb-3">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="pw"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className='text-end'>
                        <Button variant="info" type="button" onClick={handClickLogin}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default LoginComponent