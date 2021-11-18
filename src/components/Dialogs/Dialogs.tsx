import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ChatInputContainer} from "./ChatInput/ChatInputContainer";

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {

    let dialogsPage = useSelector<RootReducerType, DialogsPageType>(state => state.dialogsPage)

    const dialogsElements = dialogsPage.dialogs
        .map(p => <DialogItem
            key={p.id}
            name={p.name}
            id={p.id}
            img={p.img}
        />)

    const messagesElements = dialogsPage.messages
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
                <ChatInputContainer
                    newMessageText={dialogsPage.newMessageText}
                />
            </div>
        </div>
    );
}

// TODO add style to messages go up, when you write new messages