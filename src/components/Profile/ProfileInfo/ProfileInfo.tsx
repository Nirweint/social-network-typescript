import React, {ChangeEvent, useCallback, useState} from 'react';
import s from './ProfileInfo.module.css';
import {UserInfoType} from "../../../redux/reducers/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import avatarDefault from "../../../assets/images/user-avatar.webp";
import {Button} from "../../../UI/Button/Button";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";

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

    const {photos} = userInfo;

    const [editMode, setEditMode] = useState<boolean>(false)

    const onMainPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0])
        }
    }

    const onEditProfileClick = useCallback(() => {
        setEditMode(!editMode)
    }, [editMode])

    const isPhotosSmallExists = photos.small || avatarDefault

    if (!userInfo) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.avatarBlock}>
                    <img className={s.avatar} src={isPhotosSmallExists} alt="avatar"/>
                    {editMode &&
					<div>
                        <h4>Change photo</h4>
						<input
							type={'file'}
							name={"file"}
							accept="image/png, image/gif, image/jpeg"
							onChange={onMainPhotoChange}
						/>
					</div>}
                    {isProfileOwner &&
					<Button onClick={onEditProfileClick} className={s.btn}>
                        Edit Profile
                    </Button>}
                </div>
                {editMode ?
                    <ProfileDataForm
                        userInfo={userInfo}
                        handleProfileStatusUpdate={handleProfileStatusUpdate}
                        status={status}
                        isEditModeOn={editMode}
                        onEditProfileClick={onEditProfileClick}
                    />
                    :
                    <ProfileData
                        handleProfileStatusUpdate={handleProfileStatusUpdate}
                        status={status}
                        userInfo={userInfo}
                        isEditModeOn={editMode}
                    />
                }
            </div>
        </div>
    );
})