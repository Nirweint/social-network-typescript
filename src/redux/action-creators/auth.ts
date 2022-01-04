import {SET_USER_DATA} from "../reducers/auth-reducer";
import {ThunkType} from "../redux-store";
import {authAPI} from "../../api/api";
import {Nullable} from "../../types";

export type AuthActionsType = setAuthUserDataACType

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (email: Nullable<string>,  id: Nullable<number>, login: Nullable<string>, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {email, id, login, isAuth},
    } as const
}

export const getUserDataTC = (): ThunkType => async dispatch => {
    try {
        const res = await authAPI.getUserData()
        if (res.resultCode === 0) {
            const {email, id, login} = res.data
            dispatch(setAuthUserDataAC(email, id, login, true))
        }
    } catch (err: any) {
        console.warn(err)
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
    try {
        const res = await authAPI.login(email, password, rememberMe)
        if (res.resultCode === 0) {
            dispatch(getUserDataTC())
        }
    } catch (err: any) {
        console.warn(err)
    }
}

export const logoutTC = (): ThunkType => async dispatch => {
    try {
        const res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    } catch (err: any) {
        console.warn(err)
    }
}