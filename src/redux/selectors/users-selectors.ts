import {RootStateType} from "../redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.count
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}