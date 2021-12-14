const SET_USER_DATA = "SET_USER_DATA";

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type RootActionTypes = setAuthUserDataACType

export const authReducer = (state = initState, action: RootActionTypes): AuthStateType=> {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload, isAuth: true}
        }

        default:
            return state
    }
}

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (payload: {id: number, login: string, email: string}) => {
    return {
        type: SET_USER_DATA,
        payload,
    }
}