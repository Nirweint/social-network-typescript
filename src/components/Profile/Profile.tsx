import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {
    getProfileStatusTC, savePhotoTC,
    setUserInfoTC,
    updateProfileStatusTC
} from "../../redux/action-creators/profile";

const Profile: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const status = useTypedSelector(state => state.profilePage.status)
    const dispatch = useDispatch()
    const {userId} = useParams<'userId'>()

    const isProfileOwner = userId ? authId === +userId : false

    useEffect(() => {
        if (userId) {
            dispatch(setUserInfoTC(+userId))
            dispatch(getProfileStatusTC(+userId))
        }
    }, [dispatch, userId])

    const savePhoto = useCallback((photoFile: File) => {
        if (userId) {
            dispatch(savePhotoTC(photoFile,+userId ))
        }
    }, [dispatch, userId])

    const handleProfileStatusUpdate = useCallback((status: string) => {
        if (userId && authId === +userId) {
            dispatch(updateProfileStatusTC(status))
        }
    }, [dispatch, authId, userId])

    return (
        <div>
            <ProfileInfo
                savePhoto={savePhoto}
                isProfileOwner={isProfileOwner}
                userInfo={userInfo}
                status={status}
                handleProfileStatusUpdate={handleProfileStatusUpdate}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;