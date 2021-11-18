import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {ChatInput} from "./ChatInput/ChatInput";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs
        .map(p => <DialogItem
            key={p.id}
            name={p.name}
            id={p.id}
            img={p.img}
        />)

    const messagesElements = props.messages
        .map(m => <Message
            key={m.id}
            messageText={m.messageText}
            id={m.id}
            name={m.name}
            time={m.time}
            avatar={m.avatar}
            head={m.head}
        />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <h2 className={style.title}>Dialogs:</h2>
                {dialogsElements}
            </div>
            <div className={style.chatBody}>
                <div className={style.messages}>{messagesElements}</div>
                <ChatInput
                    newMessageText={props.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

// TODO add style to messages go up, when you write new messages