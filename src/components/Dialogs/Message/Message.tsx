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

    if (props.name !== props.head) {
        return (
            <div className={s.message + " " + s.right} key={props.id}>
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

    return (
        <div className={s.message} key={props.id}>
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