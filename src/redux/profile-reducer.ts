import {ActionsTypes, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT_CALL_BACK = "CHANGE-NEW-POST-TEXT-CALL-BACK"

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let trimmedNewText = state.newPostText.trim();
            let newPost: PostType = {
                id: v1(),
                message: trimmedNewText,
                likesCount: 0,
                img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            }
            if (trimmedNewText) {
                state.posts.push(newPost)
                state.newPostText = '';
            }
            return state;
        case CHANGE_NEW_POST_TEXT_CALL_BACK:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewPostTextCallBackAC = (newText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT_CALL_BACK,
        newText: newText
    } as const
}