import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {setUserInfoAC} from "../../redux/action-creators/profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useLocation} from "react-router-dom";

export const ProfileContainer: React.FC = () => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const {setUserInfoAC} = useActions()
    const location = useLocation();


    useEffect(() => {
        let loc = location.state
        let userId;
        loc !== null ? userId = loc : userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(
                response => {
                    setUserInfoAC(response.data)
                }
            )

    }, [])

    return (
        <div>
            <Profile
                userInfo={userInfo}
            />
        </div>
    );
}