import {connect} from "react-redux";
import {UsersPageType, UserType} from "../../redux/reducers/users-reducer";
import {
    getIsFollowedTC,
    getUsersTC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC
} from "../../redux/action-creators/users";
import {RootReducerType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type mapDispatchToPropsType = {
    onFollowClick: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, count: number) => void
    getIsFollowed: (userId: number) => void
}
export type UsersContainerPropsType = UsersPageType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count)
    }

    setCurrentPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.count)
    }

    toggleFollow = (userId: number) => {
        this.props.getIsFollowed(userId)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users
                        users={this.props.users}
                        count={this.props.count}
                        currentPage={this.props.currentPage}
                        totalCount={this.props.totalCount}
                        followingInProgress={this.props.followingInProgress}
                        onFollowClick={this.toggleFollow}
                        setCurrentPageHandler={this.setCurrentPageHandler}
                    />
                }
            </>
        )
    }
}

let
    mapStateToProps = (state: RootReducerType): UsersPageType => {
        return {
            users: state.usersPage.users,
            count: state.usersPage.count,
            totalCount: state.usersPage.totalCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress,
        }
    }

export default connect(mapStateToProps, {
    onFollowClick: toggleFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalCount: setTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    getUsers: getUsersTC,
    getIsFollowed: getIsFollowedTC,
})(UsersContainer);