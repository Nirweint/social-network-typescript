import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";
import {ChatInput} from "./ChatInput/ChatInput";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: () => void
    newMessageText: string
    onChangeInputValueMessage: (inputValue: string) => void
}

export function Dialogs(props: DialogsPropsType) {


    const dialogsElements = props.dialogs
        .map(person => <DialogItem key={person.id} name={person.name} id={person.id} img={person.img}/>)
    const messagesElements = props.messages
        .map(message => <Message
            key={message.id}
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
                <ChatInput
                    addMessage={props.addMessage}
                    newMessageText={props.newMessageText}
                    onChangeInputValueMessage={props.onChangeInputValueMessage}
                />
            </div>
        </div>
    );
}

// TODO add style to messages go up, when you write new messages