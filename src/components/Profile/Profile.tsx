import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {ProfilePageType} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
}

export const Profile = (props: ProfilePropsType) => {
    let profilePage = useSelector<RootReducerType, ProfilePageType>(state => state.profilePage)

    return (
        <div>
            <ProfileInfo userInfo={profilePage.userInfo}/>
            <MyPostsContainer
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
            />
        </div>
    );
};