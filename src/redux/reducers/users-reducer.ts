import {UsersActionsType} from "../action-creators/users";

export const TOGGLE_FOLLOW = "users/TOGGLE-FOLLOW"
export const SET_USERS = "users/SET-USERS";
export const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
export const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT"
export const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
export const TOGGLE_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS"

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

export const usersReducer = (state = initialUsersState, action: UsersActionsType): UsersPageType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }

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
                followingInProgress: action.followingInProgress
                    ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}