import React from 'react';
import s from './Users.module.css';
import {Button} from "../../UI/Button/Button";
import defaultImg from "../../assets/images/user-avatar.webp"

type UsersPropsType = {
    onClick: () => void
    id: number
    followed: boolean
    img: string
    name: string
    status: string
}

export const Users: React.FC<UsersPropsType> = ({onClick, id, followed, img, name, status, ...props}) => {

    return (
        <div className={s.container}>
            <div key={id} id={id.toString()} className={s.item}>
                <div className={s.follow}>
                    <img className={s.avatar} src={img !== null ? img : defaultImg} alt="avatar"/>
                    <Button
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
                    <div>
                        <span>{"city"}</span>
                        <div>{"country"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}