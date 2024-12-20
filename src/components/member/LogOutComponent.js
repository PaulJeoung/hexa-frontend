import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/loginSlice'
import useCustomLogin from '../../hooks/useCustomLogin'

const LogOutComponent = () => {
    const { doLogout, moveToPath } = useCustomLogin()
    
    const handClickLogOut = () => {
        doLogout()
        alert("로그아웃 되었습니다")
        moveToPath("/")
    }
  return (
    <>
    <div className='d-flex justify-content-center my-5'>
        <div className='w-50 mt-5 border p-5 text-center'>
            <h3 className='mb-5'>LogOut Component</h3>
            <div>
                <Button variant="warning" type="button" onClick={handClickLogOut}>
                    LogOut
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default LogOutComponent