import React from 'react';
import s from './User.module.css';
import {Button} from "../../UI/Button/Button";
import defaultImg from "../../assets/images/user-avatar.webp"
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    onClick: () => void
    id: number
    followed: boolean
    img: string
    name: string
    status: string
    isButtonDisabled: boolean
}

export const User: React.FC<UsersPropsType> = (
    {
        onClick, id,
        followed, img, name,
        status, isButtonDisabled, ...props
    }) => {

    return (
        <div className={s.container} key={id}>
            <div id={id.toString()} className={s.item}>
                <div className={s.follow}>
                    <NavLink to={`/profile/${id}`}>
                        <img
                            className={s.avatar}
                            src={img !== null ? img : defaultImg}
                            alt="avatar"
                        />
                    </NavLink>
                    <Button
                        disabled={isButtonDisabled}
                        red={followed}
                        onClick={onClick}
                    >
                        {followed ? "Unfollow" : "Follow"}
                    </Button>
                </div>
                <div className={s.information}>
                    <div className={s.information__item}>
                        <h3>{name}</h3>
                        <div className={s.status}>
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}