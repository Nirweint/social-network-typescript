import {INITIALIZED_SUCCESS} from "../reducers/app-reducer";
import {ThunkType} from "../redux-store";
import {getUserDataTC} from "./auth";

export type AppActionsType = initializedSuccessACType

export type initializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

// THUNK
export const initializeAppTC = (): ThunkType => async dispatch => {
    const promise = dispatch(getUserDataTC())
    await Promise.all([promise])
    dispatch(initializedSuccessAC())

}