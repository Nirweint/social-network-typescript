import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {
    appReducer,
    authReducer,
    dialogsReducer,
    profileReducer,
    sidebarReducer,
    usersReducer
} from "./reducers";
import {
    AppActionsType,
    AuthActionsType,
    DialogsActionsType,
    ProfileActionsType, UsersActionsType
} from "./action-creators/types";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof rootReducer>
export type ThunkType = ThunkAction<void, RootReducerType, unknown, RootActionsType>

export type RootActionsType =
    AuthActionsType
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AppActionsType

//@ts-ignore
window.store = store