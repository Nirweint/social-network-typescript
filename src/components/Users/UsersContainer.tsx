import {connect} from "react-redux";
import {UsersPageType, UserType} from "../../redux/reducers/users-reducer";
import {
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC, toggleFollowingProgressAC,
    toggleIsFetchingAC
} from "../../redux/action-creators/users";
import {RootReducerType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export type mapDispatchToPropsType = {
    onFollowClick: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}
export type UsersContainerPropsType = UsersPageType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.count).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }

    setCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.count).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    toggleFollow = (userId: number) => {
        this.props.toggleFollowingProgress(true, userId)
        usersAPI.isFollowed(userId).then(
            data => {
                if (data === true) {
                    usersAPI.unfollowUser(userId).then(
                        data => {
                            if (data.resultCode === 0) {
                                this.props.onFollowClick(userId)
                            }
                            this.props.toggleFollowingProgress(false, userId)
                        })
                }
                if (data === false) {
                    usersAPI.followUser(userId).then(
                        data => {
                            if (data.resultCode === 0) {
                                this.props.onFollowClick(userId)
                            }
                            this.props.toggleFollowingProgress(false, userId)
                        })
                }

            })
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
    toggleFollowingProgress: toggleFollowingProgressAC,
})(UsersContainer);