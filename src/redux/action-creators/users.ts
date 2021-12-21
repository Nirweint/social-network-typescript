import {
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW,
    TOGGLE_IS_FETCHING, TOGGLE_FOLLOWING_PROGRESS,
    UserType
} from "../reducers/users-reducer";
import {ThunkType} from "../redux-store";
import {usersAPI} from "../../api/api";

export type UsersActionsType =
    toggleFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType

export type toggleFollowACType = ReturnType<typeof toggleFollowAC>
export const toggleFollowAC = (userId: number) => {
    return {
        type: TOGGLE_FOLLOW,
        userId: userId
    } as const

}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users,
    } as const
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const
}

export type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount,
    } as const
}

export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

export type toggleIsFollowingProgressACType = ReturnType<typeof toggleFollowingProgressAC>
export const toggleFollowingProgressAC = (followingInProgress: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        followingInProgress,
        userId,
    } as const
}

// THUNK
export const getUsersTC = (currentPage: number, count: number): ThunkType => async dispatch => {
    try {
        dispatch(toggleIsFetchingAC(true))
        const res = await usersAPI.getUsers(currentPage, count)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setUsersAC(res.items));
        dispatch(setTotalCountAC(res.totalCount));

    } catch (e: any) { // TODO how to type this?
        throw new Error(e)
    }

}

export const getIsFollowedTC = (userId: number): ThunkType => async dispatch => {
    try {
        dispatch(toggleFollowingProgressAC(true, userId))
        const res = await usersAPI.isFollowed(userId)
        if (res === true) {
            const res = await usersAPI.unfollowUser(userId)
            if (res.resultCode === 0) {
                dispatch(toggleFollowAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        }
        if (res === false) {
            const res = await usersAPI.followUser(userId)
            if (res.resultCode === 0) {
                dispatch(toggleFollowAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        }
    } catch (e: any) {
        throw new Error(e)
    }
}