import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

//@ts-ignore
window.store=store