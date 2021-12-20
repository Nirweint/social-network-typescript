import {ActionsTypes} from "../store";
import {usersAPI} from "../../api/api";
import {
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC,
    toggleFollowingProgressAC,
    toggleIsFetchingAC
} from "../action-creators/users";
import {ThunkType} from "../redux-store";

export const TOGGLE_FOLLOW = "TOGGLE-FOLLOW"
export const SET_USERS = "SET-USERS";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
export const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
    // location: UserLocationType
}
export type UsersPageType = {
    users: Array<UserType>
    count: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialUsersState: UsersPageType = {
    users: [] as Array<UserType>,
    count: 8,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialUsersState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
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