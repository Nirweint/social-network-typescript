import React from 'react';
import {User} from "./User";
import {UserType} from "../../redux/reducers/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";

type UsersPropsType = {
    users: Array<UserType>
    count: number
    totalCount: number
    currentPage: number
    followingInProgress: number[]
    onFollowClick: (userId: number) => void
    setCurrentPage: (page: number) => void
}


export const Users: React.FC<UsersPropsType> = ({
                                                    totalCount,
                                                    users,
                                                    count,
                                                    followingInProgress,
                                                    currentPage,
                                                    onFollowClick,
                                                    setCurrentPage
                                                }) => {

    const isButtonDisabled = (userId: number) => {
        return followingInProgress.some(id => id === userId)
    }


    return (
        <div>
            <Paginator currentPage={currentPage}
                       count={count}
                       totalCount={totalCount}
                       setCurrentPage={setCurrentPage}
            />

            {users && users.map(({
                                     id, followed, photos,
                                     name, status
                                 }) => {
                return (
                    <User
                        key={id}
                        id={id}
                        followed={followed}
                        img={photos.small}
                        name={name}
                        status={status}
                        isButtonDisabled={isButtonDisabled(id)}
                        onClick={() => onFollowClick(id)}
                    />
                )
            })}
        </div>
    );
}