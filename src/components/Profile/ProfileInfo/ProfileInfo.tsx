import React from 'react';
import s from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/state";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div>
                <img className={s.backgroundImg}
                     src={props.userInfo.backgroundImg}
                     alt="background"/>
            </div>
            <div className={s.wrapper}>
                <img className={s.avatar} src={props.userInfo.avatar} alt="avatar"/>
                <div>
                    <div className={s.name}>
                        <h3>{props.userInfo.firstName} {props.userInfo.lastName}</h3>
                    </div>
                    <div className={s.description}>{props.userInfo.description}</div>
                </div>
            </div>
        </div>
    );
}