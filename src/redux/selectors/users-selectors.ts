import {RootReducerType} from "../redux-store";

export const getUsers = (state: RootReducerType) => {
    return state.usersPage.users
}

export const getPageSize = (state: RootReducerType) => {
    return state.usersPage.count
}

export const getTotalUsersCount = (state: RootReducerType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: RootReducerType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootReducerType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootReducerType) => {
    return state.usersPage.followingInProgress
}