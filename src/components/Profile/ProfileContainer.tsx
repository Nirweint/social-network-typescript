import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export const ProfileContainer: React.FC = withAuthRedirect(() => {

    const userInfo = useTypedSelector(state => state.profilePage.userInfo)
    const authId = useTypedSelector(state => state.auth.id)

    const {setUserInfoTC} = useActions()
    const params = useParams<'userId'>()

    let userId = params.userId !== null ? params.userId : authId

    useEffect(() => {
        setUserInfoTC(userId)
    }, [userId])

    return (
        <div>
            <Profile
                userInfo={userInfo}
            />
        </div>
    );
})