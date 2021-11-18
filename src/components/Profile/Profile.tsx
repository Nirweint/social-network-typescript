import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import {ActionsTypes, PostType, ProfilePageType, UserInfoType} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";


type ProfilePropsType = {
    // posts: Array<PostType>
    // userInfo: UserInfoType
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    let profilePage = useSelector<RootReducerType, ProfilePageType>(state => state.profilePage)

    return (
        <div>
            <ProfileInfo userInfo={profilePage.userInfo}/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    );
};