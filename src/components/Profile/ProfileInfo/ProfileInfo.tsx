import React from 'react';
import style from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/store";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    const {backgroundImg, avatar, lastName, firstName, description} = props.userInfo;

    return (
        <div>
            <div>
                <img className={style.backgroundImg}
                     src={backgroundImg}
                     alt="background"/>
            </div>
            <div className={style.wrapper}>
                <img className={style.avatar} src={avatar} alt="avatar"/>
                <div>
                    <div className={style.name}>
                        <h3>{firstName} {lastName}</h3>
                    </div>
                    <div className={style.description}>{description}</div>
                </div>
            </div>
        </div>
    );
}