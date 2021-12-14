import {ActionsTypes} from "../store";

export const TOGGLE_FOLLOW = "TOGGLE-FOLLOW"
export const SET_USERS = "SET-USERS";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

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
}

const initialUsersState: UsersPageType = {
    users: [] as Array<UserType>,
    count: 8,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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

        default:
            return state;
    }
}

