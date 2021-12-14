import {SET_USER_DATA} from "../reducers/auth-reducer";

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (payload: {id: number, login: string, email: string}) => {
    return {
        type: SET_USER_DATA,
        payload,
    }
}