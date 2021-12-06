import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/reducers/profile-reducer";


type ProfilePropsType = {
}

export const Profile = (props: ProfilePageType) => {
    // let userInfo = useTypedSelector(state => state.profilePage.userInfo)

    return (
        <div>
            <ProfileInfo userInfo={props.userInfo}/>
            <MyPostsContainer
                // posts={profilePage.posts}
                // newPostText={profilePage.newPostText}
            />
        </div>
    );
};