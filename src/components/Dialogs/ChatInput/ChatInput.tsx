import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./ChatInput.module.css"

type ChatInputPropsType = {
    addMessage: () => void
    newMessageText: string
    onChangeInputValueMessage: (inputValue: string) => void
}

export const ChatInput = (props: ChatInputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputValueMessage(e.currentTarget.value)

    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && props.newMessageText) {
            props.addMessage()
        }
    }

    const addMessageHandler = () => {
        if (props.newMessageText) {
            props.addMessage()
            props.onChangeInputValueMessage("")
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