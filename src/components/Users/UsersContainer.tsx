import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserType} from "../../redux/reducers/users-reducer";
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../../redux/action-creators/users";
import Users from "./Users";
import {RootReducerType} from "../../redux/redux-store";

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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);