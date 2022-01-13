import {RootReducerType} from "../redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootReducerType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

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