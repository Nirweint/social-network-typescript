import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserInfoType} from "../../redux/reducers/profile-reducer";


type ProfilePropsType = {
    userInfo: UserInfoType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPostsContainer/>
        </div>
    );
};