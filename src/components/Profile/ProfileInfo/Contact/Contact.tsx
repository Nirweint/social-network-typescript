import React, {FC} from 'react';
import {FormikProps} from "formik";
import {UserInfoType} from "../../../../redux/reducers/profile-reducer";
import s from './Contact.module.css'
import {Button} from "../../../../UI/Button/Button";

type ContactPropsType = {
    name: string
    value: string
    isEditModeOn: boolean
    fieldName?: string
    formik?: FormikProps<Omit<UserInfoType, 'photos'>>
}

export const Contact: FC<ContactPropsType> = ({name, value, isEditModeOn,fieldName, formik}) => {
    return (
        <div >{
            isEditModeOn && formik ?
                <h4>{fieldName}:
                    <input
                        {...formik.getFieldProps(name)}
                    />
                </h4>
                :
                <Button className={s.link} >
                    <a href={value} target={'_blank'} rel="noreferrer">{name}</a>
                </Button>
        }
        </div>
    );
}