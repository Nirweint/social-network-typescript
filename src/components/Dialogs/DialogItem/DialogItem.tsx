import React from "react";
import {NavLink} from "react-router-dom";
import style from './DialogItem.module.css';

type DialogItemPropsType = {
    name: string
    id: string
    img: string
}

export function DialogItem(props: DialogItemPropsType) {

    const activeLinkStyle = ({isActive}: {isActive: boolean}) => isActive ? style.active : ""
    const path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <img className={style.avatar} src={props.img} alt="avatar"/>
            <NavLink to={path} className={activeLinkStyle}>{props.name}</NavLink>
        </div>
    )
}