import AxiosBase from "axios";
const instance = AxiosBase.create({
    baseURL: "http://localhost:8000",
});

export const axios = instance;
