import { axios } from "./axios";
import FormData from "form-data";

export class User {
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<{status: boolean, user?:User,message?: string}>}
     */
    static async login(username, password) {
        try {

            // create a www-x-form-urlencoded form to send the request using axios

            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            // send the request to the server using axios
            return (await axios.post('/login', formData)).data;
        }
        catch (err) {
            console.log("An unknown error occured when trying to login");
            console.log(err);

            return {
                status: false,
                user: undefined,
                message: "there is unknown problem with this login, please try again",
            };
        }
    }

    static async logout() {
        try {
            return await axios.post("/api/logout");
        }
        catch (err) {
            return null;
        }
    }

    static async csrf() {
        try {
            const csrfCode = await axios.get("/api/sanctum/csrf-cookie");
            return csrfCode.data
        }
        catch (err) {
            return "";
        }
    }
    /**
     * 
     * @param {import("@/types/User").RequiredRegisterData} data 
     * @returns {Promise<{status: boolean, user?:User,message?: string}>}
     */
    static async register(data) {
        try {

            const formData = new FormData({ enctype: "application/x-www-form-urlencoded" });
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("password_confirmation", data.password_confirmation);
            formData.append("name", data.name);
            formData.append("phone", data.phone);

            return (await axios.post("/register")).data
        }
        catch (err) {
            console.log("An unknown error occured when trying to register new user");
            console.log(err);

            return {
                status: false,
                user: undefined,
                message: "there is unknown problem with this register, please try again",
            };
        }
    }

    /**
     * @returns {Promise<import("@/types/User").User|null>}
     */
    static async getUser() {
        try {
            const user = await axios.get("/api/user");
            return user.data;
        }
        catch (err) {
            return null;
        }
    }

}