import {SET_USERS, TOGGLE_FOLLOW, UserType} from "../reducers/users-reducer";

export const toggleFollowAC = (userId: string) => {
    return {
        type: TOGGLE_FOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users,
    } as const
}