import {v1} from "uuid";

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
    id: number
    name: string
    img: string
}
export type MessageType = {
    id: number
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
}
export type FriendType = {
    id: number
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


export let state: RootStateType = {
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
                id: 1,
                name: "Alex",
                img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            },
            {
                id: 2,
                name: "Sofa",
                img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
            },
            {
                id: 3,
                name: "Oleg",
                img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
            },
            {
                id: 4,
                name: "Pasha",
                img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/LuHL7kJap_p2AMvhHWndMpcGRj6lv9f_OiEscfE9zqkeFhQAbA7NB15Bfglq5l_IPB2JOmHb.jpg?size=200x200&quality=96&crop=560,0,720,720&ava=1"
            },
        ],
        messages: [
            {
                head: "Alex",
                id: 1,
                messageText: "I'm gonna make him an offer he can't refuse.",
                name: "Alex",
                time: "22:00",
                avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            },
            {
                head: "Alex",
                id: 2,
                messageText: "A friend should always underestimate your virtues and an enemy overestimate your faults.",
                name: "Sofa",
                time: "22:00",
                avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
            },
            {
                head: "Alex",
                id: 3,
                messageText: "Revenge is a dish best served cold.",
                name: "Alex",
                time: "22:00",
                avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            },
            {
                head: "Alex",
                id: 4,
                messageText: "You spend time with your family?",
                name: "Sofa",
                time: "22:00",
                avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
            },
            {
                head: "Alex",
                id: 5,
                messageText: "Sure I do.",
                name: "Alex",
                time: "22:00",
                avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
            },
            {
                head: "Alex",
                id: 6,
                messageText: "Good. 'Cause a man who doesn't spend time with his family can never be a real man.",
                name: "Sofa",
                time: "22:00",
                avatar: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album",
            },
        ]
    },
    Sidebar: {
        friends: [
            {
                id: 1,
                name: "Alex",
                img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw"
            },
            {
                id: 2,
                name: "Sofa",
                img: "https://sun9-80.userapi.com/impg/gJeHyr8s0kj96H0LVEz1Gq7vHteh1QYV8_Kdow/FRSJlnhrNaY.jpg?size=878x627&quality=96&sign=00b60f8e76d747c622535e511da56ce4&type=album"
            },
            {
                id: 3,
                name: "Oleg",
                img: "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/r3RvNnQxvdb_L2EuFMLfbDCBxbtm8pL8xQKGYVNbvsmoCAxAOr_9Hyi1KkeIFbCVhrhQ_mvT.jpg?size=200x200&quality=96&crop=1,1,1917,1917&ava=1"
            },
        ]
    }
}

let renderEntireTree = () => {
    console.log('state changed')
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}
export const addPost = (value: string) => {
    let newPost: PostType = {
        id: v1(),
        message: value,
        likesCount: 0,
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree()
}
export const addMessage = (messageText: string) => {
    let newMessage: MessageType = {
        head: "Alex",
        id: 1,
        messageText: messageText,
        name: "Alex",
        time: "22:00",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEdJHJUKr7psA/profile-displayphoto-shrink_200_200/0/1634277974590?e=1640822400&v=beta&t=omPVN9KbsKhKnN2Yn0dTkqkGXi0QkSGtEJ5thjvYGPw",
    }

    state.dialogsPage.messages.push(newMessage)
    renderEntireTree()
}
export const changeNewPostTextCallBack = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}