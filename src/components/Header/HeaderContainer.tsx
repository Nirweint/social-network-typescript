import React from 'react';
import {Header, HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getUserDataTC} from "../../redux/action-creators/auth";

type mapDispatchToPropsType = {
    getUserDataTC: () => void
}

type HeaderContainerPropsType = HeaderPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getUserDataTC()
    }

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
}


const mapStateToProps = (state: RootReducerType): HeaderPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {getUserDataTC})(HeaderContainer);