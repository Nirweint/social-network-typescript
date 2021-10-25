import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
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
}

export const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar friends={props.state.Sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => <Profile
                            posts={props.state.profilePage.posts}
                            userInfo={props.state.profilePage.userInfo}
                        />}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                        />}
                    />

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}