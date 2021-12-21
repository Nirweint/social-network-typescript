import {ADD_MESSAGE, ON_CHANGE_INPUT_VALUE_MESSAGE} from "../reducers/dialogs-reducer";

export type DialogsActionsType = addMessageACType | onChangeInputValueMessageACType

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}
export type onChangeInputValueMessageACType = ReturnType<typeof onChangeInputValueMessageAC>
export const onChangeInputValueMessageAC = (inputValue: string) => {
    return {
        type: ON_CHANGE_INPUT_VALUE_MESSAGE,
        inputValue: inputValue
    } as const
}