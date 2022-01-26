import {AppActionsType} from "../action-creators/app";

export const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type AppStateType = {
    initialized: boolean
}

const initialState: AppStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true,}

        default:
            return state
    }
}

