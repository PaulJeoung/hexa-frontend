import React from 'react'
import useCustomLogin from '../hooks/useCustomLogin'

const AboutPage = () => {
  // 로그인 여부 확인 후 로그인이 안된 경우 로그인 페이지로 이동
  const { isLogin, moveToLoginReturn, moveToLogin } = useCustomLogin()

  if(!isLogin) {
    return moveToLoginReturn()
  } 
  return (
    <>
      <div>AboutPage</div>
    </>
  )
}

export default AboutPage