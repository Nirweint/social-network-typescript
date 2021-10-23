import React from "react";
import s from './Message.module.css';

type MessagePropsType = {
    messageText: string
    id: number
    name: string
    time: string
    avatar: string
    head: string
}

export function Message(props: MessagePropsType) {

    let messageStyle;
    props.name === props.head ? messageStyle = s.message + " " + s.right : messageStyle = s.message;

    return (
        <div className={messageStyle} key={props.id}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.cloud}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageText}>{props.messageText}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )

}