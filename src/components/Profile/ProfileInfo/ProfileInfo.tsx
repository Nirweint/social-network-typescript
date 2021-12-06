import React from 'react';
import style from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    const {photos, fullName, lookingForAJobDescription,aboutMe } = props.userInfo;

    if(!props.userInfo) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={style.backgroundImg}
                     src={photos.large}
                     alt="background"/>
            </div>
            <div className={style.wrapper}>
                <img className={style.avatar} src={photos.small} alt="avatar"/>
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