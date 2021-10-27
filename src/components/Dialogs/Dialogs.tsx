import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";
import {ChatInput} from "./ChatInput/ChatInput";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs
        .map(person => <DialogItem name={person.name} id={person.id} img={person.img}/>)
    const messagesElements = props.messages
        .map(message => <Message
            messageText={message.messageText}
            id={message.id}
            name={message.name}
            time={message.time}
            avatar={message.avatar}
            head={message.head}
        />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <h2 className={style.title}>Dialogs:</h2>
                {dialogsElements}
            </div>
            <div className={style.chatBody}>
                <div className={style.messages}>{messagesElements}</div>
                <ChatInput/>
            </div>
        </div>
    );
}