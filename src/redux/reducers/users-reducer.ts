import {ActionsTypes} from "../store";
import {v1} from "uuid";

export const img = "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"

export const TOGGLE_FOLLOW = "TOGGLE-FOLLOW"
export const SET_USERS = "SET-USERS";

type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    isFollowed: boolean
    img: string
    fullName: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
}

const initialUsersState: UsersPageType = {
    users: [
        {
            id: v1(),
            isFollowed: false,
            img: img,
            fullName: "Alexander",
            status: "I'm front-end developer",
            location: {city: "Pinsk", country: "Belarus"}
        },
        {
            id: v1(),
            isFollowed: true,
            img: img,
            fullName: "Sofi",
            status: "I'm bitch girl",
            location: {city: "Pinsk", country: "Belarus"}
        },
        {
            id: v1(),
            isFollowed: false,
            img: img,
            fullName: "Oleg",
            status: "I'm engineer",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            isFollowed: false,
            img: img,
            fullName: "Pasha",
            status: "I'm engineer",
            location: {city: "Minsk", country: "Belarus"}
        },
    ]
}

export const usersReducer = (state:UsersPageType = initialUsersState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, isFollowed: !u.isFollowed} : u)}

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

