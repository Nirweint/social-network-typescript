import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {setUserInfoAC} from "../../redux/action-creators/profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useParams} from "react-router-dom";

export const ProfileContainer: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)
    const {setUserInfoAC} = useActions()
    const params = useParams<'userId'>()

    useEffect(() => {
        let userId;
        params.userId !== null ? userId = params.userId : userId = authId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(
                response => {
                    setUserInfoAC(response.data)
                }
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