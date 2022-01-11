import React from 'react';
import preloader from "../../../assets/loading/spinner-1s-200px.svg";

export const Preloader = () => {
    return (
        <>
            <img src={preloader} alt={"preloader"}/>
        </>
    );
}