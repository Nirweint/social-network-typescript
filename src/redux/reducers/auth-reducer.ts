import {AuthActionsType} from "../action-creators/auth";
import {Nullable} from "../../types";

export const SET_USER_DATA = "auth/SET_USER_DATA";
export const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";
export const SET_ERROR = "auth/SET_ERROR";

export type AuthStateType = {
    id: Nullable<number>
    login: Nullable<string>
    email: Nullable<string>
    error: Nullable<string>
    isAuth: boolean
    captchaUrl: Nullable<string>
}

const initState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
    error: null,
}

export const authReducer = (state = initState, action: AuthActionsType): AuthStateType=> {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case GET_CAPTCHA_URL : {
            return {...state, captchaUrl: action.captchaUrl}
        }
        case SET_ERROR : {
            return {...state, error: action.error}
        }

        default:
            return state
    }
}

