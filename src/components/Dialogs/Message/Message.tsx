import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    messageText: string
    id: number
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}