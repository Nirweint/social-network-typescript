import React from "react";
import style from './Message.module.css';

type MessagePropsType = {
    messageText: string
    id: string
    name: string
    time: string
    avatar: string
    head: string
}

export function Message(props: MessagePropsType) {

    let messageStyle;
    props.name === props.head ? messageStyle = `${style.message} ${style.right}` : messageStyle = style.message;

    return (
        <div className={messageStyle} key={props.id}>
            <div className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={style.cloud}>
                <div className={style.name}>{props.name}</div>
                <div className={style.messageText}>{props.messageText}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )

}