import React from 'react';
import s from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatarDefault from "../../../assets/images/user-avatar.webp";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
    status: string
    handleProfileStatusUpdate: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(props => {
    const {
        userInfo,
        status,
        handleProfileStatusUpdate
    } = props;
    const {photos, fullName, lookingForAJobDescription, aboutMe} = userInfo;

    const isPhotosSmallExists = photos.small ? photos.small : avatarDefault

    if (!userInfo) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.avatar} src={isPhotosSmallExists} alt="avatar"/>
                <div>
                    <div className={s.name}>
                        <h3>{fullName}</h3>
                    </div>
                    <ProfileStatus
                        status={status}
                        handleProfileStatusUpdate={handleProfileStatusUpdate}
                    />
                    <div className={s.description}>{aboutMe}</div>
                    <div className={s.description}>{lookingForAJobDescription} </div>
                </div>
            </div>
        </div>
    );
})