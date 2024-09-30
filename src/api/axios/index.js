import AxiosBase from "axios";
const instance = AxiosBase.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Referer': 'http://localhost:3000',
    },
    withCredentials: true,
});
export const axios = instance;
