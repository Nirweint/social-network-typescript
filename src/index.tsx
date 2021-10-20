import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

export type MyPostDataType = {
    id: number
    message: string
    likesCount: number
    img: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    messageText: string
}

let myPostData: Array<MyPostDataType> = [
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

let dialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sofa"},
    {id: 3, name: "Oleg"},
    {id: 4, name: "Pasha"},
]

let messagesData: Array<MessagesDataType> = [
    {id: 1, messageText: "hello my friend"},
    {id: 2, messageText: "how are you?"},
    {id: 3, messageText: "love you"},
    {id: 4, messageText: "this is so beautiful"},
]

ReactDOM.render(<App
        myPostData={myPostData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />, document.getElementById('root')
);

