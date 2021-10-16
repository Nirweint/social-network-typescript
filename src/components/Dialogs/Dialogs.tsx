import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs:</h2>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Sofa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Pasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hello my friend</div>
                <div className={s.message}> how are you?</div>
                <div className={s.message}>fuck you</div>
                <div className={s.message}>this is so beautiful</div>
            </div>
        </div>
    );
}