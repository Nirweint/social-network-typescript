import {SET_USER_DATA} from "../reducers/auth-reducer";
import {ThunkType} from "../redux-store";
import {authAPI} from "../../api/api";

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (payload: { id: number, login: string, email: string }) => {
    return {
        type: SET_USER_DATA,
        payload,
    } as const
}

export const getUserDataTC = (): ThunkType => async dispatch => {
    try {
        const res = await authAPI.getUserData()
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataAC(res.data))
        }
    } catch (e: any) {
        throw new Error(e)
    }

}