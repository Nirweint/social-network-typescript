import {GET_CAPTCHA_URL, SET_ERROR, SET_USER_DATA} from "../reducers/auth-reducer";
import {ThunkType} from "../redux-store";
import {authAPI, securityAPI} from "../../api/api";
import {Nullable} from "../../types";

export type AuthActionsType =
    SetAuthUserDataACType
    | SetCaptchaUrlACType
    | SetAuthErrorACType

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (email: Nullable<string>, id: Nullable<number>, login: Nullable<string>, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {email, id, login, isAuth},
    } as const
}

export type SetCaptchaUrlACType = ReturnType<typeof setCaptchaUrlAC>
export const setCaptchaUrlAC = (captchaUrl: Nullable<string>) => {
    return {
        type: GET_CAPTCHA_URL,
        captchaUrl,
    } as const
}

export type SetAuthErrorACType = ReturnType<typeof setAuthErrorAC>
export const setAuthErrorAC = (error: Nullable<string>) => {
    return {
        type: SET_ERROR,
        error,
    } as const
}

// THUNK
export const getUserDataTC = (): ThunkType => async dispatch => {
    try {
        const res = await authAPI.getUserData()
        if (res.data.resultCode === 0) {
            const {email, id, login} = res.data.data
            dispatch(setAuthUserDataAC(email, id, login, true))
            return res
        }
    } catch (err: any) {
        console.warn(err)
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkType => async dispatch => {
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            dispatch(getUserDataTC())
            dispatch(setAuthErrorAC(null))
        }
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        if (res.data.resultCode === 1) {
            dispatch(setAuthErrorAC(res.data.messages[0]))
        }
    } catch (err: any) {
        console.warn(err)
    }
}

export const logoutTC = (): ThunkType => async dispatch => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    } catch (err: any) {
        console.warn(err)
    }
}

export const getCaptchaUrlTC = (): ThunkType => async dispatch => {
    try {
        const res = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrlAC(res.data.url))
    } catch (err: any) {
        console.warn(err)
    }
}