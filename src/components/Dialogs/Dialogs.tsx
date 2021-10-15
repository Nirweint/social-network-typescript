import React from 'react';
import s from './Dialogs.module.css';

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs:</h2>
                <div className={s.dialog + " " + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Sofa
                </div>
                <div className={s.dialog}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Pasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hello my friend</div>
                <div className={s.message}> how are you?</div>
                <div className={s.message}>fuck you</div>
                <div className={s.message}>this is so beautiful</div>
            </div>
        </div>
    );
}