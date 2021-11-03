import React from "react";
import {NavLink} from "react-router-dom";
import style from './DialogItem.module.css';

type DialogItemPropsType = {
    name: string
    id: string
    img: string
}

export function DialogItem(props: DialogItemPropsType) {

    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <img className={style.avatar} src={props.img} alt="avatar"/>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}