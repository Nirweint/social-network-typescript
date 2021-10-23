export type PostType = {
    id: number
    message: string
    likesCount: number
    img: string
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
        posts: [
            {
                id: 1,
                message: "Hello, how are you?",
                likesCount: 5,
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
            {
                id: 2,
                message: "How was your day?",
                likesCount: 9,
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
            {
                id: 3,
                message: "This day is amazing",
                likesCount: 1,
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: "Alex",
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
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
