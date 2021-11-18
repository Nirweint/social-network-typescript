import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "./ChatInput.module.css"
import {addMessageAC, onChangeInputValueMessageAC} from "../../../redux/dialogs-reducer";
import {ActionsTypes} from "../../../redux/store";

type ChatInputPropsType = {
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export const ChatInput = (props: ChatInputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(onChangeInputValueMessageAC(e.currentTarget.value))

    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && props.newMessageText) {
            props.dispatch(addMessageAC())
        }
    }

    const addMessageHandler = () => {
        if (props.newMessageText) {
            props.dispatch(addMessageAC())
            props.dispatch(onChangeInputValueMessageAC(''))
        }
    }

    return (
        <div className={style.body}>
            <input
                value={props.newMessageText}
                onChange={onChangeInputHandler}
                className={style.inputItem}
                onKeyPress={onEnterPressHandler}
            />
            <button onClick={addMessageHandler} className={style.inputBtn}>Add</button>
        </div>
    );
}