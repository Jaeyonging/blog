import axios from 'axios';
import { getCookie, removeCookie } from './cookies';

// 모든 요청에 JWT 토큰을 Authorization 헤더로 첨부한다.
axios.interceptors.request.use((config) => {
    const token = getCookie('token');
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 토큰 만료/무효(401)면 토큰을 비우고 로그인 화면으로 보낸다.
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            removeCookie('token');
            if (!window.location.pathname.includes('/login')) {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);
