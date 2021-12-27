import {ADD_POST, CHANGE_NEW_POST_TEXT_CALL_BACK, SET_USER_INFO, UserInfoType} from "../reducers/profile-reducer";
import {ThunkType} from "../redux-store";
import {profileAPI} from "../../api/api";

export type ProfileActionsType = addPostACType | changeNewPostTextCallBackACType | setUserInfoACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export type changeNewPostTextCallBackACType = ReturnType<typeof changeNewPostTextCallBackAC>
export const changeNewPostTextCallBackAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT_CALL_BACK,
        newText: newText
    } as const
}

export type setUserInfoACType = ReturnType<typeof setUserInfoAC>
export const setUserInfoAC = (userInfo: UserInfoType) => {
    return {
        type: SET_USER_INFO,
        userInfo
    } as const
}

// THUNK
export const setUserInfoTC = (userId: string | number | null | undefined): ThunkType => async dispatch => {
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(setUserInfoAC(res))
    } catch (err: any) {
        console.warn(err)
    }
}