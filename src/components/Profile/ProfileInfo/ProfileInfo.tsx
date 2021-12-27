import React from 'react';
import s from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatarDefault from "../../../assets/images/user-avatar.webp";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
    status: string
    updateProfileStatusHandler: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.userInfo) {
        return <Preloader/>
    }
    const {photos, fullName, lookingForAJobDescription, aboutMe} = props.userInfo;

    let isPhotosSmallExists = photos.small ? photos.small : avatarDefault

    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.avatar} src={isPhotosSmallExists} alt="avatar"/>
                <div>
                    <div className={s.name}>
                        <h3>{fullName}</h3>
                    </div>
                    <ProfileStatus
                        status={props.status}
                        updateProfileStatusHandler={props.updateProfileStatusHandler}
                    />
                    <div className={s.description}>{aboutMe}</div>
                    <div className={s.description}>{lookingForAJobDescription} </div>
                </div>
            </div>
        </div>
    );
}