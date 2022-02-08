import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatarDefault from "../../../assets/images/user-avatar.webp";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    userInfo: UserInfoType
    status: string
    isProfileOwner: boolean
    savePhoto: (photoFile: File) => void
    handleProfileStatusUpdate: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(props => {
    const {
        userInfo,
        status,
        savePhoto,
        isProfileOwner,
        handleProfileStatusUpdate
    } = props;
    const {photos, fullName, lookingForAJobDescription, aboutMe} = userInfo;

    const handleMAinPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0])
        }
    }

    const isPhotosSmallExists = photos.small || avatarDefault

    if (!userInfo) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.avatarBlock}>
                    <img className={s.avatar} src={isPhotosSmallExists} alt="avatar"/>
                    {isProfileOwner && <div>
						<input type={'file'}
							   accept="image/png, image/gif, image/jpeg"
                               onChange={handleMAinPhotoSelected}/>
					</div>}
                </div>
                <div>
                    <div className={s.name}>
                        <h3>{fullName}</h3>
                    </div>
                    <ProfileStatus
                        status={status}
                        handleProfileStatusUpdate={handleProfileStatusUpdate}
                    />
                    <div className={s.description}>{aboutMe}</div>
                    <div className={s.description}>{lookingForAJobDescription} </div>
                </div>
            </div>
        </div>
    );
})