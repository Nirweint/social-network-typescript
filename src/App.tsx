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
import {DialogsDataType, MessagesDataType, MyPostDataType} from "./index";

type AppPropsType = {
    myPostData: Array<MyPostDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => <Profile
                            myPostData={props.myPostData}
                        />}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs
                            dialogsData={props.dialogsData}
                            messagesData={props.messagesData}
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