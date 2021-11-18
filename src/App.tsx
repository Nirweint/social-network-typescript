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
import {ActionsTypes, DialogsPageType, FriendsType, ProfilePageType, RootStateType, StoreType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/redux-store";

type AppPropsType = {
    // store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

export const App = (props: AppPropsType) => {

    let dispatch = useDispatch()


    let dialogsPage = useSelector<RootReducerType, DialogsPageType>(state => state.dialogsPage)
    let sidebar = useSelector<RootReducerType, FriendsType>(state => state.sidebar)

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar friends={sidebar.friends}/>
            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => <Profile
                        // posts={profilePage.posts}
                        // userInfo={profilePage.userInfo}
                        // newPostText={profilePage.newPostText}
                        // dispatch={dispatch}
                    />}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs
                        dialogs={dialogsPage.dialogs}
                        messages={dialogsPage.messages}
                        newMessageText={dialogsPage.newMessageText}
                        dispatch={dispatch}
                    />}
                />

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}