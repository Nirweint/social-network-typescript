import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "./ChatInput.module.css"

type ChatInputPropsType = {
    newMessageText: string
    changeInput: (newMessageText: string) => void
    addMessageOnEnterPress: (keyValue: string) => void
    addMessage: () => void
}

export const ChatInput = (props: ChatInputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInput(e.currentTarget.value)
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            props.addMessageOnEnterPress(e.key)
    }
    const addMessageHandler = () => {
        props.addMessage()
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