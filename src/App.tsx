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
import {ActionsTypes, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App = (props: AppPropsType) => {
    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar friends={state.Sidebar.friends}/>
            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => <Profile
                        posts={state.profilePage.posts}
                        userInfo={state.profilePage.userInfo}
                        newPostText={state.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        addMessage={props.store.addMessage.bind(props.store)}
                        newMessageText={state.dialogsPage.newMessageText}
                        onChangeInputValueMessage={props.store.onChangeInputValueMessage.bind(props.store)}
                    />}
                />

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}