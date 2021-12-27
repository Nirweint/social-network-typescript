import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    return (props: T) => {

        const isAuth = useTypedSelector(state => state.auth.isAuth)

        if (!isAuth) return <Navigate to="/login"/>
        return <Component {...props as T}/>
    }
}