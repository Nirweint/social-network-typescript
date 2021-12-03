import React from 'react';
import s from './Users.module.css';
import {Users} from "./Users";
import {img, UserType} from "../../redux/reducers/users-reducer";
import {Button} from "../../UI/Button/Button";
import {v1} from "uuid";
import {setUsersAC, toggleFollowAC} from "../../redux/action-creators/users";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import axios from "axios";

export const UsersContainer = () => {
    let users = useTypedSelector(state => state.usersPage.users)
    const {toggleFollowAC, setUsersAC} = useActions()

    // const newUsers = [
    //     {
    //         id: v1(),
    //         isFollowed: false,
    //         img: img,
    //         fullName: "Nastya",
    //         status: "I'm front-end developer",
    //         location: {city: "Minsk", country: "Belarus"}
    //     },
    //     {
    //         id: v1(),
    //         followed: true,
    //         img: img,
    //         name: "Vova",
    //         status: "I'm front-end developer",
    //         location: {city: "Mogilev", country: "Belarus"}
    //     },
    // "items": [
    //     {
    //         "name": "mrfreiii",
    //         "id": 21144,
    //         "uniqueUrlName": null,
    //         "photos": {
    //             "small": null,
    //             "large": null
    //         },
    //         "status": null,
    //         "followed": false
    //     },
    // ]

    if (users.length === 4) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }

    const onFollowClick = (userId: number) => {
        toggleFollowAC(userId)
    }
    const setUsers = (users: Array<UserType>) => {
        setUsersAC(users)
    }

    return (
        <div>
            {
               users && users.map(u => {
                    return (
                        <Users
                            key={u.id}
                            id={u.id}
                            followed={u.followed}
                            img={u.photos.small}
                            name={u.name}
                            status={u.status}
                            // city={u.location.city}
                            // country={u.location.country}
                            onClick={() => onFollowClick(u.id)}
                        />
                    )
                })
            }
            <div>
                {/*<Button onClick={() => setUsers(response)}>Show More</Button>*/}
            </div>
        </div>

    );
}