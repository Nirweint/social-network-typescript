import {ADD_POST, CHANGE_NEW_POST_TEXT_CALL_BACK} from "../reducers/profile-reducer";

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