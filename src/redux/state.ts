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
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
            {
                id: 3,
                name: "Oleg",
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
            {
                id: 4,
                name: "Pasha",
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
        ],
        messages: [
            {
                id: 1,
                messageText: "hello my friend"
            },
            {
                id: 2,
                messageText: "how are you?"
            },
            {
                id: 3,
                messageText: "love you"
            },
            {
                id: 4,
                messageText: "this is so beautiful"
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
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
            {
                id: 3,
                name: "Oleg",
                img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            },
        ]
    }
}
