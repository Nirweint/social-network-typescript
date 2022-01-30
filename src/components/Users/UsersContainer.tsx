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
import {RootStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";

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

    setCurrentPage = (pageNumber: number) => {
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
                        setCurrentPage={this.setCurrentPage}
                    />
                }
            </>
        )
    }
}

let
    mapStateToProps = (state: RootStateType): UsersPageType => {
        return {
            users: getUsers(state),
            count: getPageSize(state),
            totalCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
        }
    }


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        onFollowClick: toggleFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalCount: setTotalCountAC,
        toggleIsFetching: toggleIsFetchingAC,
        getUsers: getUsersTC,
        getIsFollowed: getIsFollowedTC,
    })
)(UsersContainer)
