import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import {appReducer} from "./reducers/app-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {ProfileActionsType} from "./action-creators/profile";
import {DialogsActionsType} from "./action-creators/dialog";
import {UsersActionsType} from "./action-creators/users";
import {AuthActionsType} from "./action-creators/auth";
import {AppActionsType} from "./action-creators/app";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type ThunkType = ThunkAction<void, RootReducerType, unknown, RootActionsType>

export type RootActionsType =
    AuthActionsType
    | DialogsActionsType
    | ProfileActionsType
    | UsersActionsType
    | AppActionsType

//@ts-ignore
window.store = store