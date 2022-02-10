import {v1} from "uuid";
import {ProfileActionsType} from "../action-creators/profile";

export const imgForNewPost = "https://sun9-52.userapi.com/impf/c850120/v850120142/de34f/-V0Lx1I09fo.jpg?size=2160x2160&quality=96&sign=e11d8ba5c927096811c14b692a8f67e0&type=album"

export const ADD_POST = "profile/ADD-POST"
export const SET_USER_INFO = "profile/SET-USER-INFO"
export const SET_PROFILE_STATUS = "profile/SET-PROFILE-STATUS"
export const SET_PROFILE_PHOTO = "profile/SET-PROFILE-PHOTO"


export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ContactsType = {
    [github: string]: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
    status: string
}

export const initialProfileState: ProfilePageType = {
    userInfo: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        aboutMe: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: null,
            large: null,
        },
    } as UserInfoType,
    posts: [
        {
            id: v1(),
            message: "Hello, how are you?",
            likesCount: 5,
            img: imgForNewPost,
        },
        {
            id: v1(),
            message: "How was your day?",
            likesCount: 9,
            img: imgForNewPost,
        },
        {
            id: v1(),
            message: "This day is amazing",
            likesCount: 1,
            img: imgForNewPost,
        },
    ] as Array<PostType>,
    status: "",
}

export const profileReducer = (state = initialProfileState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {
                    id: v1(),
                    message: action.newPostText,
                    likesCount: 0,
                    img: imgForNewPost,
                }]
            }

        case SET_USER_INFO:
            return {...state, userInfo: action.userInfo}

        case SET_PROFILE_STATUS:
            return {...state, status: action.status}

        case SET_PROFILE_PHOTO:
            return {
                ...state,
                userInfo: {...state.userInfo, photos: action.photos}
            }
        default:
            return state;
    }
}

