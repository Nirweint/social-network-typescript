import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "9776f825-db80-4051-9f58-6c0d39788ac9",
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, count: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${count}`)
    },
    isFollowed(userId: number) {
        return instance.get(`/follow/${userId}`)
    },
    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    getProfileStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateProfileStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    },
    setProfileImage(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)

        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
}

export const authAPI = {
    getUserData() {
        return instance.get<getUserDataResponseType>("/auth/me")
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post("/auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("/auth/login")
    },
}

export type getUserDataResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}