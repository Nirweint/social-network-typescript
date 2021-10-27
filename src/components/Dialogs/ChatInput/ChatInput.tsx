import React from 'react';
import style from "./ChatInput.module.css"

export const ChatInput = () => {



    return (
        <div className={style.body} >
            <textarea className={style.inputItem}/>
            <button className={style.inputBtn}>Add</button>
        </div>
    );
}