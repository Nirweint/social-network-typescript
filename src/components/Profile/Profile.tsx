import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

export type MyPostDataType = {
    id: number
    message: string
    likesCount: number
    img: string
}

export const Profile = () => {

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

    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostData={myPostData}/>
        </div>
    );
};