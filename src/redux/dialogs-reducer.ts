import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_INPUT_VALUE_MESSAGE = "ON-CHANGE-INPUT-VALUE-MESSAGE"

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                head: "Alex",
                id: v1(),
                messageText: state.newMessageText,
                name: "Alex",
                time: "22:00",
                avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            }

            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case ON_CHANGE_INPUT_VALUE_MESSAGE:
            state.newMessageText = action.inputValue
            return state;
        default:
            return state;
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}
export const onChangeInputValueMessageAC = (inputValue: string) => {
    return {
        type: ON_CHANGE_INPUT_VALUE_MESSAGE,
        inputValue: inputValue
    } as const
}