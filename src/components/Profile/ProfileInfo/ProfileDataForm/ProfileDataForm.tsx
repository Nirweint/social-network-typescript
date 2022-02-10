import React, {FC, memo} from 'react';
import {ProfileStatus} from "../ProfileStatus";
import {Contact} from "../Contact/Contact";
import {useFormik} from "formik";
import {updateProfileInfoTC} from "../../../../redux/action-creators/profile";
import {useDispatch} from "react-redux";
import {Button} from "../../../../UI/Button/Button";
import {ProfileDataPropsType} from "../ProfileData/ProfileData";
import s from './ProfileDataForm.module.css';

type ProfileDataFormPropsType = ProfileDataPropsType & { onEditProfileClick: () => void }

export const ProfileDataForm: FC<ProfileDataFormPropsType> = memo(({
                                                                       userInfo,
                                                                       status,
                                                                       handleProfileStatusUpdate,
                                                                       isEditModeOn,
                                                                       onEditProfileClick
                                                                   }) => {

    const {
        fullName,
        lookingForAJobDescription,
        aboutMe,
        contacts,
        lookingForAJob,
        userId
    } = userInfo;

    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            lookingForAJob,
            fullName,
            aboutMe,
            contacts,
            lookingForAJobDescription,
            userId,
        },
        onSubmit: values => {
            dispatch(updateProfileInfoTC(values))
            onEditProfileClick()
            formik.resetForm();
        },
    })

    return (
        <div className={s.wrapper}>
            <div>
                <span><b>status: </b></span>
                <ProfileStatus
                    status={status}
                    handleProfileStatusUpdate={handleProfileStatusUpdate}
                />
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <h4>fullName:
                        <input {...formik.getFieldProps('fullName')}/>
                    </h4>
                </div>

                <div>
                    <h4>aboutMe<b className={s.red}>*</b>:
                        <input {...formik.getFieldProps('aboutMe')}/>
                    </h4>
                </div>

                <div>
                    <h4>lookingForAJob:
                        <input
                            type={"checkbox"}
                            name={'lookingForAJob'}
                            onChange={formik.handleChange}
                            checked={formik.values.lookingForAJob}
                        />
                    </h4>
                </div>
                <div>
                    <h4>lookingForAJobDescription<b className={s.red}>*</b>:
                        <input {...formik.getFieldProps('lookingForAJobDescription')}/>
                    </h4>
                </div>

                <div>
                    {Object.keys(contacts).map((key: string) => {
                        const value = contacts[key]
                        return (
                            <Contact
                                key={key}
                                name={'contacts.' + key}
                                fieldName={key}
                                value={value}
                                isEditModeOn={isEditModeOn}
                                formik={formik}
                            />
                        )
                    })}
                </div>
                <Button type="submit">Save changes</Button>
            </form>
        </div>
    );
});