import React from 'react';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Sidebar} from "./components/Sidebar/Sidebar";
import "./App.css";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}


