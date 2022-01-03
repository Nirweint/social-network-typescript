import {
    ADD_POST,
    SET_PROFILE_STATUS,
    SET_USER_INFO,
    UserInfoType
} from "../reducers/profile-reducer";
import {ThunkType} from "../redux-store";
import {profileAPI} from "../../api/api";

export type ProfileActionsType =
    addPostACType
    | setUserInfoACType
    | setProfileStatusACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText,
    } as const
}

export type setUserInfoACType = ReturnType<typeof setUserInfoAC>
export const setUserInfoAC = (userInfo: UserInfoType) => {
    return {
        type: SET_USER_INFO,
        userInfo
    } as const
}

export type setProfileStatusACType = ReturnType<typeof setProfileStatusAC>
export const setProfileStatusAC = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status,
    } as const
}

// THUNK
export const setUserInfoTC = (userId: number): ThunkType => async dispatch => {
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(setUserInfoAC(res.data))
    } catch (err: any) {
        console.warn(err)
    }
}

export const getProfileStatusTC = (userId: number): ThunkType => async dispatch => {
    try {
        const res = await profileAPI.getProfileStatus(userId)
        dispatch(setProfileStatusAC(res.data))
    } catch (err: any) {
        console.warn(err)
    }
}

export const updateProfileStatusTC = (status: string): ThunkType => async dispatch => {
    try {
        const res = await profileAPI.updateProfileStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setProfileStatusAC(status))
        }
    } catch (err: any) {
        console.warn(err)
    }
}