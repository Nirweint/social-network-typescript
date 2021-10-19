import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    messageText: string
}

export function Dialogs() {

    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Sofa"},
        {id: 3, name: "Oleg"},
        {id: 4, name: "Pasha"},
    ]

    let messagesData: Array<MessagesDataType> = [
        {id: 1, messageText: "hello my friend"},
        {id: 2, messageText: "how are you?"},
        {id: 3, messageText: "love you"},
        {id: 4, messageText: "this is so beautiful"},
    ]

    const dialogsItemJSX = dialogsData.map(person => <DialogItem name={person.name} id={person.id}/>)
    const messageJSX = messagesData.map(message => <Message messageText={message.messageText} id={message.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs:</h2>
                {dialogsItemJSX}
            </div>
            <div className={s.messages}>
                {messageJSX}
            </div>
        </div>
    );
}



