import React from 'react';
import s from './Users.module.css';
import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {img, setUsersAC, toggleFollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Button} from "../../UI/Button/Button";
import {v1} from "uuid";

export const UsersContainer = () => {
    let usersPage = useSelector<RootReducerType, UsersPageType>(state => state.usersPage)
    let dispatch = useDispatch()

    const newUsers = [
        {
            id: v1(),
            isFollowed: false,
            img: img,
            fullName: "Nastya",
            status: "I'm front-end developer",
            location: {city: "Mins", country: "Belarus"}
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
        dispatch(toggleFollowAC(userId))
    }

    const setUsers = (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }


    return (
        <div>
            {
                usersPage.users.map(u => {
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