import React from 'react';
import style from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatarDefault from "../../../assets/images/user-avatar.webp";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.userInfo) {
        return <Preloader/>
    }
    const {photos, fullName, lookingForAJobDescription, aboutMe} = props.userInfo;

    let isPhotosLargeExists = photos.large ? photos.large : "https://image.freepik.com/free-vector/sky-blue-background-with-bokeh-light-effect_1017-33332.jpg"
    let isPhotosSmallExists = photos.small ? photos.small : avatarDefault

    return (
        <div>
            <div>
                <img className={style.backgroundImg}
                     src={isPhotosLargeExists}
                     alt="background"/>
            </div>
            <div className={style.wrapper}>
                <img className={style.avatar} src={isPhotosSmallExists} alt="avatar"/>
                <div>
                    <div className={style.name}>
                        <h3>{fullName}</h3>
                    </div>
                    <div className={style.description}>{aboutMe}</div>
                    <div className={style.description}>{lookingForAJobDescription} </div>
                </div>
            </div>
        </div>
    );
}