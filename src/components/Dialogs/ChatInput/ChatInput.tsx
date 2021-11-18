import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "./ChatInput.module.css"
import {addMessageAC, onChangeInputValueMessageAC} from "../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";

type ChatInputPropsType = {
    newMessageText: string
}

export const ChatInput = (props: ChatInputPropsType) => {

    let dispatch = useDispatch()

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeInputValueMessageAC(e.currentTarget.value))

    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && props.newMessageText) {
            addMessageHandler()
        }
    }
    const addMessageHandler = () => {
        props.newMessageText.trim() &&
        dispatch(addMessageAC())
        dispatch(onChangeInputValueMessageAC(''))
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