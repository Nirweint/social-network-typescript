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
        debugger
        let pathname = location.pathname
        axios.get(`https://social-network.samuraijs.com/api/1.0${pathname}` )
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