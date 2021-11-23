import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

console.log(store.getState())