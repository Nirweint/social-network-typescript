import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {getProfileStatusTC, setUserInfoTC, updateProfileStatusTC} from "../../redux/action-creators/profile";

export const Profile: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const status = useTypedSelector(state => state.profilePage.status)
    const dispatch = useDispatch()
    const {userId} = useParams<'userId'>()

    useEffect(() => {
        if (userId) {
            dispatch(setUserInfoTC(+userId))
            dispatch(getProfileStatusTC(+userId))
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
                userInfo={userInfo}
                status={status}
                handleProfileStatusUpdate={handleProfileStatusUpdate}
            />
            <MyPostsContainer/>
        </div>
    );
}