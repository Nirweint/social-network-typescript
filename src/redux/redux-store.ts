import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {addPostACType, changeNewPostTextCallBackACType, setUserInfoACType} from "./action-creators/profile";
import {addMessageACType, onChangeInputValueMessageACType} from "./action-creators/dialog";
import {
    setCurrentPageACType,
    setTotalCountACType,
    setUsersACType,
    toggleFollowACType,
    toggleIsFetchingACType,
    toggleIsFollowingProgressACType
} from "./action-creators/users";
import {setAuthUserDataACType} from "./action-creators/auth";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type ThunkType = ThunkAction<void, RootReducerType, unknown, ActionsTypes>

export type ActionsTypes =
    addPostACType
    | changeNewPostTextCallBackACType
    | setUserInfoACType
    | addMessageACType
    | onChangeInputValueMessageACType
    | toggleFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType
    | setAuthUserDataACType


//@ts-ignore
window.store = store