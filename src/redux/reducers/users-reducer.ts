import {ActionsTypes} from "../store";
import {v1} from "uuid";

export const img = "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"

export const TOGGLE_FOLLOW = "TOGGLE-FOLLOW"
export const SET_USERS = "SET-USERS";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"

type UserLocationType = {
    city: string
    country: string
}

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
}

const initialUsersState: UsersPageType = {
    users: [] as Array<UserType>,
    count: 8,
    totalCount: 0,
    currentPage: 1,
    // users: [
    //     {
    //         id: 1,
    //         followed: false,
    //         photos: {
    //             small: img,
    //             large: "",
    //         },
    //         name: "Alexander",
    //         status: "I'm front-end developer",
    //         location: {city: "Pinsk", country: "Belarus"}
    //     },
    //     {
    //         id: 2,
    //         followed: true,
    //         photos: {
    //             small: img,
    //             large: "",
    //         },
    //         name: "Sofi",
    //         status: "I'm bitch girl",
    //         location: {city: "Pinsk", country: "Belarus"}
    //     },
    //     {
    //         id: 3,
    //         followed: false,
    //         photos: {
    //             small: img,
    //             large: "",
    //         },
    //         name: "Oleg",
    //         status: "I'm engineer",
    //         location: {city: "Minsk", country: "Belarus"}
    //     },
    //     {
    //         id: 4,
    //         followed: false,
    //         photos: {
    //             small: img,
    //             large: "",
    //         },
    //         name: "Pasha",
    //         status: "I'm engineer",
    //         location: {city: "Minsk", country: "Belarus"}
    //     },
    // ]
}

export const usersReducer = (state = initialUsersState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}

        case SET_USERS:
            return {...state, users: [...action.users]}

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}

        default:
            return state;
    }
}

