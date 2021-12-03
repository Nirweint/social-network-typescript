import {UserType} from "./reducers/users-reducer";
import {addPostAC, changeNewPostTextCallBackAC} from "./action-creators/profile";
import {addMessageAC, onChangeInputValueMessageAC} from "./action-creators/dialog";
import {setUsersAC, setUsersACType, toggleFollowAC} from "./action-creators/users";

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
    sidebar: FriendsType
    usersPage: Array<UserType>
}
export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _renderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// Actions types ------------------------------

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewPostTextCallBackAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof onChangeInputValueMessageAC> |
    ReturnType<typeof toggleFollowAC> |
    setUsersACType

// Store ---------------------------
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             userInfo: {
//                 avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 firstName: "Alexander",
//                 lastName: "Vakulich",
//                 description: "Hello. I'm a front-end developer.",
//                 backgroundImg: "https://i.pinimg.com/originals/3a/ff/a4/3affa4e523e653d3b8d4ebeb5d4aac34.jpg",
//             },
//             posts: [
//                 {
//                     id: v1(),
//                     message: "Hello, how are you?",
//                     likesCount: 5,
//                     img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     id: v1(),
//                     message: "How was your day?",
//                     likesCount: 9,
//                     img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     id: v1(),
//                     message: "This day is amazing",
//                     likesCount: 1,
//                     img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: v1(),
//                     name: "Alex",
//                     img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     id: v1(),
//                     name: "Sofa",
//                     img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
//                 },
//                 {
//                     id: v1(),
//                     name: "Oleg",
//                     img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
//                 },
//                 {
//                     id: v1(),
//                     name: "Pasha",
//                     img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/LuHL7kJap_p2AMvhHWndMpcGRj6lv9f_OiEscfE9zqkeFhQAbA7NB15Bfglq5l_IPB2JOmHb.jpg?size=200x200&quality=96&crop=560,0,720,720&ava=1"
//                 },
//             ],
//             messages: [
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "I'm gonna make him an offer he can't refuse.",
//                     name: "Alex",
//                     time: "22:00",
//                     avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "A friend should always underestimate your virtues and an enemy overestimate your faults.",
//                     name: "Sofa",
//                     time: "22:00",
//                     avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
//                 },
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "Revenge is a dish best served cold.",
//                     name: "Alex",
//                     time: "22:00",
//                     avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "You spend time with your family?",
//                     name: "Sofa",
//                     time: "22:00",
//                     avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
//                 },
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "Sure I do.",
//                     name: "Alex",
//                     time: "22:00",
//                     avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
//                 },
//                 {
//                     head: "Alex",
//                     id: v1(),
//                     messageText: "Good. 'Cause a man who doesn't spend time with his family can never be a real man.",
//                     name: "Sofa",
//                     time: "22:00",
//                     avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
//                 },
//             ],
//             newMessageText: "",
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: v1(),
//                     name: "Alex",
//                     img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"
//                 },
//                 {
//                     id: v1(),
//                     name: "Sofa",
//                     img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
//                 },
//                 {
//                     id: v1(),
//                     name: "Oleg",
//                     img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
//                 },
//             ]
//         }
//     },
//     _renderEntireTree() {
//
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._renderEntireTree = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._renderEntireTree()
//     }
//
// }
