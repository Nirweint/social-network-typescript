import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';

type DialogItemType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemType) {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}