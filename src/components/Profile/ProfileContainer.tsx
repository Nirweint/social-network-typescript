import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {setUserInfoAC} from "../../redux/action-creators/profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../api/api";

export const ProfileContainer: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const {setUserInfoAC} = useActions()
    const params = useParams<'userId'>()

    let userId = params.userId !== null ? params.userId : authId

    useEffect(() => {
        profileAPI.getProfile(userId).then(
            data => setUserInfoAC(data)
        )
    }, [params])

    return (
        <div>
            <Profile
                userInfo={userInfo}
            />
        </div>
    );
}