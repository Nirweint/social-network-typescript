import {RootStateType} from "../redux-store";
import {Nullable} from "../../types";

export const selectAuthID = (state: RootStateType): Nullable<number> => state.auth.id
export const selectIsAuth = (state: RootStateType): boolean => state.auth.isAuth
export const selectCaptchaUrl = (state: RootStateType): Nullable<string> => state.auth.captchaUrl
export const selectAuthError = (state: RootStateType): Nullable<string> => state.auth.error