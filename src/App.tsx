import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import "./App.css";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

type AppPropsType = {}

export const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/profile/"/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}