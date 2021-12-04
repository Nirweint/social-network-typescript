import React from 'react';
import {User} from "./User";
import {Button} from "../../UI/Button/Button";
import axios from "axios";
import {UsersContainerPropsType} from "./UsersContainer";

class Users extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
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