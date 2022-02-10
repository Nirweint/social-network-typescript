import {
    ADD_POST, PhotosType, SET_PROFILE_PHOTO,
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
    | SetProfilePhotoACACType

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

export type SetProfilePhotoACACType = ReturnType<typeof setProfilePhotoAC>
export const setProfilePhotoAC = (photos: PhotosType) => {
    return {
        type: SET_PROFILE_PHOTO,
        photos,
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

export const updateProfileInfoTC = (data: Omit<UserInfoType, 'photos'>): ThunkType => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id
        const res = await profileAPI.updateProfile(data)
        if (res.data.resultCode === 0 && userId) {
            dispatch(setUserInfoTC(userId))
        }
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

export const savePhotoTC = (photoFile: File, userId: number): ThunkType => async dispatch => {
    try {
        const res = await profileAPI.setProfileImage(photoFile)
        if (res.data.resultCode === 0) {
            dispatch(setProfilePhotoAC(res.data))
            dispatch(setUserInfoTC(userId))
        }
    } catch (err: any) {
        console.warn(err)
    }
}