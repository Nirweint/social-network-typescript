import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs
        .map(person => <DialogItem name={person.name} id={person.id}/>)
    const messagesElements = props.messages
        .map(message => <Message messageText={message.messageText} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs:</h2>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}



