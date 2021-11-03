import React from 'react';
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import "./App.css";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    addMessage: () => void
    changeNewPostTextCallBack: (newText: string) => void
    onChangeInputValueMessage: (inputValue: string) => void
}

export const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar friends={props.state.Sidebar.friends}/>
            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => <Profile
                        posts={props.state.profilePage.posts}
                        userInfo={props.state.profilePage.userInfo}
                        addPost={props.addPost}
                        newPostText={props.state.profilePage.newPostText}
                        changeNewPostTextCallBack={props.changeNewPostTextCallBack}
                    />}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        addMessage={props.addMessage}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        onChangeInputValueMessage={props.onChangeInputValueMessage}
                    />}
                />

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}