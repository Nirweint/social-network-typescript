import React from 'react';
import s from './Users.module.css';
import {Button} from "../../UI/Button/Button";

type UsersPropsType = {
    onClick: () => void
    id: string
    isFollowed: boolean
    img: string
    fullName: string
    status: string
    city: string
    country: string
}

export const Users: React.FC<UsersPropsType> = ({onClick, id, isFollowed, img, fullName, status, city, country, ...props
                                                }) => {

    return (
        <div className={s.container}>
            <div key={id} id={id} className={s.item}>
                <div className={s.follow}>
                    <img className={s.avatar} src={img} alt="avatar"/>
                    <Button
                        red={isFollowed}
                        onClick={onClick}
                    >
                        {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                </div>
                <div className={s.information}>
                    <div className={s.information__item}>
                        <h3>{fullName}</h3>
                        <div className={s.status}>
                            {status}
                        </div>
                    </div>
                    <div>
                        <span>{city}</span>
                        <div>{country}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}