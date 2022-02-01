import React, {Suspense, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";

import {Sidebar} from "./components/Sidebar/Sidebar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Login} from "./components/Login/Login";
import {Preloader} from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";

import {initializeAppTC} from "./redux/action-creators/app";
import {selectInitialized} from "./redux/selectors/app-selectors";

import "./App.css";

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

export const App = () => {

    const initialized = useTypedSelector(selectInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile/"/>}/>
                        <Route path="/profile/:userId" element={<Profile/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}