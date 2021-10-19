import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPostDataType = {
    id: number
    message: string
    likesCount: number
    img: string
}

export function MyPosts() {

    let myPostData: Array<MyPostDataType> = [
        {
            id: 1,
            message: "Hello, how are you?",
            likesCount: 4,
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

    let postJSX = myPostData.map(post => {
        return <Post
            message={post.message}
            likesCount={post.likesCount}
            img={post.img}
            id={post.id}/>
    })


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postJSX}
            </div>
        </div>
    );
};