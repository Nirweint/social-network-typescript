import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./store";

const avatarImage = "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw";

const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_INPUT_VALUE_MESSAGE = "ON-CHANGE-INPUT-VALUE-MESSAGE"

const initialDialogsState = {
    dialogs: [
        {
            id: v1(),
            name: "Alex",
            img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            id: v1(),
            name: "Sofa",
            img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
        },
        {
            id: v1(),
            name: "Oleg",
            img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
        },
        {
            id: v1(),
            name: "Pasha",
            img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/LuHL7kJap_p2AMvhHWndMpcGRj6lv9f_OiEscfE9zqkeFhQAbA7NB15Bfglq5l_IPB2JOmHb.jpg?size=200x200&quality=96&crop=560,0,720,720&ava=1"
        },
    ],
    messages: [
        {
            head: "Alex",
            id: v1(),
            messageText: "I'm gonna make him an offer he can't refuse.",
            name: "Alex",
            time: "22:00",
            avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            head: "Alex",
            id: v1(),
            messageText: "A friend should always underestimate your virtues and an enemy overestimate your faults.",
            name: "Sofa",
            time: "22:00",
            avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
        },
        {
            head: "Alex",
            id: v1(),
            messageText: "Revenge is a dish best served cold.",
            name: "Alex",
            time: "22:00",
            avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            head: "Alex",
            id: v1(),
            messageText: "You spend time with your family?",
            name: "Sofa",
            time: "22:00",
            avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
        },
        {
            head: "Alex",
            id: v1(),
            messageText: "Sure I do.",
            name: "Alex",
            time: "22:00",
            avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
        },
        {
            head: "Alex",
            id: v1(),
            messageText: "Good. 'Cause a man who doesn't spend time with his family can never be a real man.",
            name: "Sofa",
            time: "22:00",
            avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
        },
    ],
    newMessageText: "",
}

export const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {
                    head: "Alex",
                    id: v1(),
                    messageText: state.newMessageText,
                    name: "Alex",
                    time: "22:00",
                    avatar: avatarImage,
                }]}

        case ON_CHANGE_INPUT_VALUE_MESSAGE:
            return {...state, newMessageText: action.inputValue}

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