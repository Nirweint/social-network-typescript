import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';

type DialogItemPropsType = {
    name: string
    id: number
    img: string
}

export function DialogItem(props: DialogItemPropsType) {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <img className={s.avatar} src={props.img} alt="avatar"/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}