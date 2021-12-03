import React from 'react';
import {ChatInput} from "./ChatInput";
import {addMessageAC, onChangeInputValueMessageAC} from "../../../redux/action-creators/dialog";
import {useActions} from "../../../hooks/useActions";

type ChatInputPropsType = {
    newMessageText: string
}

export const ChatInputContainer = (props: ChatInputPropsType) => {

    let {addMessageAC, onChangeInputValueMessageAC} = useActions()

    const changeInput = (newMessageText: string) => {
        onChangeInputValueMessageAC(newMessageText)

    }
    const addMessageOnEnterPress = (keyValue: string) => {
        if (keyValue === "Enter" && props.newMessageText) {
            addMessage()
        }
    }
    const addMessage = () => {
        props.newMessageText.trim() &&
        addMessageAC()
        onChangeInputValueMessageAC('')
    }

    return (
        <ChatInput
            newMessageText={props.newMessageText}
            changeInput={changeInput}
            addMessageOnEnterPress={addMessageOnEnterPress}
            addMessage={addMessage}
        />
    );
}