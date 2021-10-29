import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./ChatInput.module.css"

type ChatInputPropsType = {
    addMessage: (messageText: string) => void
}

export const ChatInput = (props: ChatInputPropsType) => {

    let [inputValue, setInputValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const messageValue = e.currentTarget.value
        setInputValue(messageValue)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addMessage(inputValue)
            setInputValue('')
        }
    }

    const addMessageHandler = () => {
        props.addMessage(inputValue)
        setInputValue('')
    }

    return (
        <div className={style.body} >
            <input
                value={inputValue}
                onChange={onChangeInputHandler}
                className={style.inputItem}
                onKeyPress={onEnterPressHandler}
            />
            <button onClick={addMessageHandler} className={style.inputBtn}>Add</button>
        </div>
    );
}