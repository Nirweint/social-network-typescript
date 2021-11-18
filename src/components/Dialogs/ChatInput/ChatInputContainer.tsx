import React from 'react';
import {addMessageAC, onChangeInputValueMessageAC} from "../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";
import {ChatInput} from "./ChatInput";

type ChatInputPropsType = {
    newMessageText: string
}

export const ChatInputContainer = (props: ChatInputPropsType) => {

    let dispatch = useDispatch()

    const changeInput = (newMessageText: string) => {
        dispatch(onChangeInputValueMessageAC(newMessageText))

    }
    const addMessageOnEnterPress = (keyValue: string) => {
        if (keyValue === "Enter" && props.newMessageText) {
            addMessage()
        }
    }
    const addMessage = () => {
        props.newMessageText.trim() &&
        dispatch(addMessageAC())
        dispatch(onChangeInputValueMessageAC(''))
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