import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./ChatInput.module.css"
import {ActionsTypes} from "../../../redux/state";

type ChatInputPropsType = {
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export const ChatInput = (props: ChatInputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type : "ON-CHANGE-INPUT-VALUE-MESSAGE", inputValue: e.currentTarget.value})

    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && props.newMessageText) {
            props.dispatch({type: "ADD-MESSAGE"})
        }
    }

    const addMessageHandler = () => {
        if (props.newMessageText) {
            props.dispatch({type: "ADD-MESSAGE"})
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