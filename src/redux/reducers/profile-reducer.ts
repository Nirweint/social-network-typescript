import {v1} from "uuid";
import {ProfileActionsType} from "../action-creators/profile";

const imgForNewPost = "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"

export const ADD_POST = "ADD-POST"
export const CHANGE_NEW_POST_TEXT_CALL_BACK = "CHANGE-NEW-POST-TEXT-CALL-BACK"
export const SET_USER_INFO = "SET-USER-INFO"

export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
type PhotosType = {
    small: string
    large: string
}
type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type UserInfoType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    userInfo: UserInfoType
    newPostText: string
}

const initialProfileState: ProfilePageType = {
    userInfo: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: "Hello. I'm a front-end developer.",
        fullName: "Alexander Vakulich",
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: imgForNewPost,
            large: "https://i.pinimg.com/originals/3a/ff/a4/3affa4e523e653d3b8d4ebeb5d4aac34.jpg",
        },
    } as UserInfoType,
    posts: [
        {
            id: v1(),
            message: "Hello, how are you?",
            likesCount: 5,
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            id: v1(),
            message: "How was your day?",
            likesCount: 9,
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            id: v1(),
            message: "This day is amazing",
            likesCount: 1,
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
    ] as Array<PostType>,
    newPostText: "",
}

export const profileReducer = (state = initialProfileState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {
                    id: v1(),
                    message: state.newPostText,
                    likesCount: 0,
                    img: imgForNewPost,
                }]
            }

        case CHANGE_NEW_POST_TEXT_CALL_BACK:
            return {...state, newPostText: action.newText}

        case SET_USER_INFO: {
            return {...state, userInfo: action.userInfo}
        }

        default:
            return state;
    }
}

