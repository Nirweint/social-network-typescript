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
            .then(response => response.data)
    },
    isFollowed(userId: number) {
        return instance.get(`/follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
            .then(response => response)
    },
    getProfileStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response)
    },
    updateProfileStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
            .then(response => response)
    }
}

export const authAPI = {
    getUserData() {
        return instance.get<getUserDataResponseType>("/auth/me")
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post("/auth/login", {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete("/auth/login")
            .then(res => res.data)
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