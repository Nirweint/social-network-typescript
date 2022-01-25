import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getUserDataTC, logoutTC} from "../../redux/action-creators/auth";
import {Nullable} from "../../types";

type mapDispatchToPropsType = {
    getUserDataTC: () => void
    logoutTC: () => void
}

type mapStateToPropsType = {
    login: Nullable<string>
    isAuth: boolean
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    logoutHandler = () => {
        this.props.logoutTC()
    }

    render() {
        return (
            <Header
                {...this.props}
                logoutHandler={this.logoutHandler}
            />
        );
    }
}


const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {getUserDataTC, logoutTC})(HeaderContainer);