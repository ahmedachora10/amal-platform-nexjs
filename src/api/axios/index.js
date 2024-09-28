import AxiosBase from "axios";
const instance = AxiosBase.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});
export const axios = instance;
