import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getUserDataTC, logoutTC} from "../../redux/action-creators/auth";

type mapDispatchToPropsType = {
    getUserDataTC: () => void
    logoutTC: () => void
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getUserDataTC()
    }

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


const mapStateToProps = (state: RootReducerType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {getUserDataTC, logoutTC})(HeaderContainer);