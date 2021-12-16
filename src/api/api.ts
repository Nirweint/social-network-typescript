import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "9776f825-db80-4051-9f58-6c0d39788ac9",
    },
});

export const usersAPI = {
    getUsers (currentPage: number = 1,count: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${count}`)
            .then(response => response.data)
    }
}