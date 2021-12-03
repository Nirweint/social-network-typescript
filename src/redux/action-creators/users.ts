import {SET_USERS, TOGGLE_FOLLOW, UserType} from "../reducers/users-reducer";



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