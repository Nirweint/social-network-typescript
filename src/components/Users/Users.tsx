import React from 'react';
import {User} from "./User";
import {Button} from "../../UI/Button/Button";
import axios from "axios";
import {UsersContainerPropsType} from "./UsersContainer";
import s from './Users.module.css';

class Users extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    setCurrentPageHandler = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return (
                                <span
                                    className={this.props.currentPage === p ? `${s.selected} ${s.page}` : `${s.page}`}
                                    onClick={() => this.setCurrentPageHandler(p)}
                                >{p}</span>
                            )
                        })
                    }
                </div>

                {
                    this.props.users && this.props.users.map(u => {
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
                                onClick={() => this.props.onFollowClick(u.id)}
                            />
                        )
                    })
                }
                {/*<div>*/}
                {/*    <Button onClick={this.getUsers}>Get Users from rest API</Button>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Users;