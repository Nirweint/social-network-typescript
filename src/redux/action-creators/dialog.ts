import {ADD_MESSAGE} from "../reducers/dialogs-reducer";

export type DialogsActionsType = addMessageACType

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage,
    } as const
}
