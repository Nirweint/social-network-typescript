import React from 'react';
import {Header, HeaderPropsType} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/action-creators/auth";

type mapDispatchToPropsType = {
    setAuthUserDataAC: (payload: { id: number, login: string, email: string }) => void
}

type HeaderContainerPropsType = HeaderPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(response.data.data)
                }
            })
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
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);