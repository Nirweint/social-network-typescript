import React, {FC, memo} from 'react';
import {ProfileStatus} from "../ProfileStatus";
import {Contact} from "../Contact/Contact";
import {UserInfoType} from "../../../../redux/reducers/profile-reducer";
import s from './ProfileData.module.css';

export type ProfileDataPropsType = {
    userInfo: UserInfoType
    status: string
    handleProfileStatusUpdate: (status: string) => void
    isEditModeOn: boolean
}

export const ProfileData: FC<ProfileDataPropsType> = memo(({
                                                               userInfo,
                                                               handleProfileStatusUpdate,
                                                               status,
                                                               isEditModeOn
                                                           }) => {

    const {
        fullName,
        lookingForAJobDescription,
        aboutMe,
        contacts,
        lookingForAJob,
    } = userInfo;

    return (
        <div className={s.wrapper}>
            <div className={s.name}>
                <h3>{fullName}</h3>
            </div>
            <div>
                <span><b>status: </b></span>
                <ProfileStatus
                    status={status}
                    handleProfileStatusUpdate={handleProfileStatusUpdate}
                />
            </div>
            <div>
                <h4>aboutMe: <span className={s.description}>{aboutMe}</span></h4>
            </div>
            <div>
                <h4>lookingForAJob: <span
                    className={s.description}>{lookingForAJob ? 'yes' : 'no'}</span>
                </h4>
            </div>
            {lookingForAJob &&
			<div>
				<div>
					<h4>Description: <span
						className={s.description}>{lookingForAJobDescription}</span>
					</h4>
				</div>
			</div>
            }
            <div>
                {Object.keys(contacts).map((key: string) => {
                    const value = contacts[key]
                    return (
                        value !== null &&
						<Contact key={key} name={key} value={value}
								 isEditModeOn={isEditModeOn}/>
                    )
                })}
            </div>
        </div>
    );
});