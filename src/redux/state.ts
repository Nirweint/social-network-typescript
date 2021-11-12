import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT_CALL_BACK = "CHANGE-NEW-POST-TEXT-CALL-BACK"
const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_INPUT_VALUE_MESSAGE = "ON-CHANGE-INPUT-VALUE-MESSAGE"

// Store types ---------------------------
export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
export type UserInfoType = {
    avatar: string
    firstName: string
    lastName: string
    description: string
    backgroundImg: string
}
export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageType = {
    id: string
    messageText: string
    name: string
    time: string
    avatar: string
    head: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    userInfo: UserInfoType
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type FriendType = {
    id: string
    name: string
    img: string
}
export type FriendsType = {
    friends: Array<FriendType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    Sidebar: FriendsType
}
export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _renderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
// -----------------------------------------

// Actions types ------------------------------

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextCallBackAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof onChangeInputValueMessageAC>

// --------------------------------------------

// Action creators ------------------------
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


// Store ---------------------------
export const store: StoreType = {
    _state: {
        profilePage: {
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
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        Sidebar: {
            friends: [
                {
                    id: v1(),
                    name: "Alex",
                    img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"
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
            ]
        }
    },
    _renderEntireTree() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let trimmedNewText = this._state.profilePage.newPostText.trim();
            let newPost: PostType = {
                id: v1(),
                message: trimmedNewText,
                likesCount: 0,
                img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            }
            if (trimmedNewText) {
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._renderEntireTree()
            }
        } else if (action.type === CHANGE_NEW_POST_TEXT_CALL_BACK) {
            this._state.profilePage.newPostText = action.newText
            this._renderEntireTree()
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {
                head: "Alex",
                id: v1(),
                messageText: this._state.dialogsPage.newMessageText,
                name: "Alex",
                time: "22:00",
                avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._renderEntireTree()
        } else if (action.type === ON_CHANGE_INPUT_VALUE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.inputValue
            this._renderEntireTree()
        }

    }

}

// -------------------------