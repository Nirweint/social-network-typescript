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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
                avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
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
