import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {getProfileStatusTC, setUserInfoTC, updateProfileStatusTC} from "../../redux/action-creators/profile";

export const Profile: React.FC = withAuthRedirect(() => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const status = useTypedSelector(state => state.profilePage.status)

    const dispatch = useDispatch()
    const params = useParams<'userId'>()

    useEffect(() => {
        if (params.userId) {
            dispatch(setUserInfoTC(+params.userId))
            dispatch(getProfileStatusTC(+params.userId))
        }
    }, [dispatch, params.userId])

    const updateProfileStatusHandler = useCallback( (status: string) => {
        if (params.userId && authId === +params.userId) {
            dispatch(updateProfileStatusTC(status))
        }
    }, [dispatch, authId, params.userId])


    return (
        <div>
                <ProfileInfo
                userInfo={userInfo}
                status={status}
                updateProfileStatusHandler={updateProfileStatusHandler}
            />
            <MyPostsContainer/>
        </div>
    );
})