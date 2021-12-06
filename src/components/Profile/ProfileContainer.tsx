import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ProfilePageType, UserInfoType} from "../../redux/reducers/profile-reducer";
import {setUserInfoAC} from "../../redux/action-creators/profile";

type ProfileContainerPropsType = ProfilePageType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    setUserInfo: (userInfo: UserInfoType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(
                response => {
                    debugger
                    this.props.setUserInfo(response.data)
                }
            )
    }

    render() {
        return (
            <div>
                <Profile
                    posts={this.props.posts}
                    userInfo={this.props.userInfo}
                    newPostText={this.props.newPostText}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: RootReducerType): ProfilePageType => {
    return {
        userInfo: state.profilePage.userInfo,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export default connect(mapStateToProps, {setUserInfo: setUserInfoAC})(ProfileContainer);

