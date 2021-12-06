import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserType} from "../../redux/reducers/users-reducer";
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../../redux/action-creators/users";
import {RootReducerType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type mapStateToPropsType = {
    users: Array<UserType>
    count: number
    totalCount: number
    currentPage: number
}
export type mapDispatchToPropsType = {
    onFollowClick: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
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
        return (
            <Users
                users={this.props.users}
                count={this.props.count}
                currentPage={this.props.currentPage}
                totalCount={this.props.totalCount}
                onFollowClick={this.props.onFollowClick}
                setCurrentPageHandler={this.setCurrentPageHandler}
            />
        )
    }
}

let mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onFollowClick: (userId: number) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);