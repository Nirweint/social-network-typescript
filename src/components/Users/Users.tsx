import React from 'react';
import s from "./Users.module.css";
import {User} from "./User";
import {UserType} from "../../redux/reducers/users-reducer";
import {useNavigate} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>
    count: number
    totalCount: number
    currentPage: number
    onFollowClick: (userId: number) => void
    setCurrentPageHandler: (p: number) => void
}


export const Users = (props: UsersPropsType) => {

    let navigate = useNavigate()
    let pagesCount = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const navigateTo = (id: number) => {
        navigate(`/profile/${id}`)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return (
                            <span
                                key={p}
                                className={props.currentPage === p ? `${s.selected} ${s.page}` : `${s.page}`}
                                onClick={() => props.setCurrentPageHandler(p)}
                            >{p}</span>
                        )
                    })
                }
            </div>

            {
                props.users && props.users.map(u => {
                    return (
                        <User
                            key={u.id}
                            id={u.id}
                            followed={u.followed}
                            img={u.photos.small}
                            name={u.name}
                            status={u.status}
                            // city={u.location.city}
                            // country={u.location.country}
                            onClick={() => props.onFollowClick(u.id)}
                            navigateTo={navigateTo}
                        />
                    )
                })
            }
            {/*<div>*/}
            {/*    <Button onClick={this.getUsers}>Get UsersAPIComponent from rest API</Button>*/}
            {/*</div>*/}
        </div>
    );
}