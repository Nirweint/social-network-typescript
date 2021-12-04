import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserType} from "../../redux/reducers/users-reducer";
import {setUsersAC, toggleFollowAC} from "../../redux/action-creators/users";
import Users from "./Users";
import {RootReducerType} from "../../redux/redux-store";

export type mapStateToPropsType = {
    users: Array<UserType>,
}

export type mapDispatchToPropsType = {
    onFollowClick: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
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
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);