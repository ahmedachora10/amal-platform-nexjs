import AxiosBase from "axios";
const instance = AxiosBase.create({
    baseURL: process.env.baseURL,
});
export const axios = instance;
