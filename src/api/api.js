import * as axios from "axios";

//настройка повторяющихся параметров запроса
const instance = axios.create({
    withCredentials: true, //передача авторизационных данных из кук на сервер
    baseURL: `https://social-network.samuraijs.com/api/1.0/`, //базовый URL повторяющийся в запросах
    headers: { //набор параметров определенный в настройках сервера
        "API-KEY": "305af354-4c54-4e6b-a5cb-7185c6ed3f40"  //в нашем случае передаем ключь подтверждения авторизации
    }
});

//usersAPI для работы с данными для Users страницы
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return  profileAPI.getProfile(userId);
    }
};

//usersAPI для работы с данными для Profile страницы
export const profileAPI = {
    getProfile(userId) {
        return  instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
};

export const authAPI = {
    me() {
       return  instance.get(`auth/me`)//проверка авторезирован ли пользователь
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
};