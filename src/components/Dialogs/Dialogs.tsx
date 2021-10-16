import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs:</h2>
                <DialogItem name="Alex" id={1}/>
                <DialogItem name="Sofa" id={2}/>
                <DialogItem name="Oleg" id={3}/>
                <DialogItem name="Pasha" id={4}/>
            </div>
            <div className={s.messages}>
                <Message messageText="hello my friend"/>
                <Message messageText="how are you?"/>
                <Message messageText="love you"/>
                <Message messageText="this is so beautiful"/>
            </div>
        </div>
    );
}

type MessageType = {
    messageText: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}