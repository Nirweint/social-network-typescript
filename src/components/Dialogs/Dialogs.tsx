import React from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {DialogsPageType} from "../../redux/reducers/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {addMessageAC} from "../../redux/action-creators/dialog";

export const Dialogs: React.FC = withAuthRedirect(() => {

    //get dialogsPage with useSelector, here i can get only state from reducer
    let dialogsPage = useSelector<RootReducerType, DialogsPageType>(state => state.dialogsPage)

    // get dialogs with custom hook, here i get in dialogsPage/dialogs. i can't do this with useSelector
    let dialogs = useTypedSelector(state => state.dialogsPage.dialogs)

    const dispatch = useDispatch()

    const addNewMessage = (newMessage: string) => {
        dispatch(addMessageAC(newMessage))
    }

    const dialogsElements = dialogs
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
                <AddMessageForm
                    onSubmit={addNewMessage}
                />
            </div>
        </div>
    );
})

// TODO add style to messages go up, when you write new messages