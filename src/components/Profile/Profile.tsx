import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {ProfilePageType} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";


type ProfilePropsType = {
}

export const Profile = (props: ProfilePropsType) => {
    let profilePage = useSelector<RootReducerType, ProfilePageType>(state => state.profilePage)

    return (
        <div>
            <ProfileInfo userInfo={profilePage.userInfo}/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
            />
        </div>
    );
};