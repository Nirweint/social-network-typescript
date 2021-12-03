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

    let getUsers = () => {
        if (users.length < 5) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
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
                <Button onClick={() => setUsers(users)}>Show More</Button>
                <Button onClick={getUsers}>Get More</Button>
            </div>
        </div>

    );
}