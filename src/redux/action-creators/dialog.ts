import {ADD_MESSAGE, ON_CHANGE_INPUT_VALUE_MESSAGE} from "../reducers/dialogs-reducer";

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}
export const onChangeInputValueMessageAC = (inputValue: string) => {
    return {
        type: ON_CHANGE_INPUT_VALUE_MESSAGE,
        inputValue: inputValue
    } as const
}