import React from 'react';
import s from './Users.module.css';
import {Users} from "./Users";
import {img, UserType} from "../../redux/reducers/users-reducer";
import {Button} from "../../UI/Button/Button";
import {v1} from "uuid";
import {setUsersAC, toggleFollowAC} from "../../redux/action-creators/users";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

export const UsersContainer = () => {
    let users = useTypedSelector(state => state.usersPage.users)
    const {toggleFollowAC, setUsersAC} = useActions()

    const newUsers = [
        {
            id: v1(),
            isFollowed: false,
            img: img,
            fullName: "Nastya",
            status: "I'm front-end developer",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            isFollowed: true,
            img: img,
            fullName: "Vova",
            status: "I'm front-end developer",
            location: {city: "Mogilev", country: "Belarus"}
        },
    ]

    const onFollowClick = (userId: string) => {
        toggleFollowAC(userId)
    }
    const setUsers = (users: Array<UserType>) => {
        setUsersAC(users)
    }


    return (
        <div>
            {
                users.map(u => {
                    return (
                        <Users
                            key={u.id}
                            id={u.id}
                            isFollowed={u.isFollowed}
                            img={u.img}
                            fullName={u.fullName}
                            status={u.status}
                            city={u.location.city}
                            country={u.location.country}
                            onClick={() => onFollowClick(u.id)}
                        />
                    )
                })
            }
            <div>
                <Button onClick={() => setUsers(newUsers)}>Show More</Button>
            </div>
        </div>

    );
}