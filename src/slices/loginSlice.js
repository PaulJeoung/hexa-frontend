import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Snow } from 'react-bootstrap-icons'
import { loginPost } from '../api/memberApi'
import { getCookie, removeCookie, setCookie } from '../util/cookieUtil'

const initState = {
    email: ''
}

// 쿠키에서 로그인 정보 로딩
const loadMemberCookie = () => {
    const memberInfo = getCookie("member")

    // 닉네임 처리
    if (memberInfo && memberInfo.nickname) {
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname)
    }
    return memberInfo
}

// createAsyncThunk('이름', () => {})
export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name : 'LoginSlice',
    initialState : loadMemberCookie() || initState, // 쿠키가 없으면 초기값을 사용함
    reducers : {
        login : (state, action) => {
            console.log("login.....")
            const data = action.payload
            return { email : data.email }
        },
        logout : (state, action) => {
            console.log("logout...")
            removeCookie("member")
            return { ...initState}
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loginPostAsync.pending, () => {
            console.log("pending : 데이터 오는중") // 데이터 오는 중
        })
        .addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fullfilled : 성공") // 성공
            const payload = action.payload

            // 정상적인 로그인시에 쿠키 저장
            if(!payload.error) {
                setCookie("member", JSON.stringify(payload), 1)
            }
            return payload
        })
        .addCase(loginPostAsync.rejected, (state, action) => {
            console.log("rejected : 실패") // 실패
        })
    } 
})

export const {login, logout } = loginSlice.actions

export default loginSlice.reducer