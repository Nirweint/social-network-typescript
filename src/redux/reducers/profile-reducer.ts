import {ActionsTypes, PostType, ProfilePageType} from "../store";
import {v1} from "uuid";

const imgForNewPost = "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"

export const ADD_POST = "ADD-POST"
export const CHANGE_NEW_POST_TEXT_CALL_BACK = "CHANGE-NEW-POST-TEXT-CALL-BACK"

const initialProfileState = {
    userInfo: {
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        firstName: "Alexander",
        lastName: "Vakulich",
        description: "Hello. I'm a front-end developer.",
        backgroundImg: "https://i.pinimg.com/originals/3a/ff/a4/3affa4e523e653d3b8d4ebeb5d4aac34.jpg",
    },
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

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts ,{
                        id: v1(),
                        message: state.newPostText,
                        likesCount: 0,
                        img: imgForNewPost,
                    }]}

        case CHANGE_NEW_POST_TEXT_CALL_BACK:
            return {...state, newPostText: action.newText}
        default:
            return state;
    }
}
