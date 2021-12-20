import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Navigate, useParams} from "react-router-dom";

export const ProfileContainer: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const isAuth = useTypedSelector(state => state.auth.isAuth)

    const {setUserInfoTC} = useActions()
    const params = useParams<'userId'>()

    let userId = params.userId !== null ? params.userId : authId

    useEffect(() => {
        if (isAuth) {
            setUserInfoTC(userId)
        }
    }, [params])

    if (!isAuth) return <Navigate to="/login"/>
    return (
        <div>
            <Profile
                userInfo={userInfo}
            />
        </div>
    );
}