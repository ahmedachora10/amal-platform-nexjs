import FormData from "form-data";
import { axios } from "./axios";
import { CSRFHeader, getCookie } from "@/utils/helpers";

export class User {
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<{status: boolean, user?:User,message?: string, token: string}>}
     */
    static async login(username, password) {
        try {

            // create a www-x-form-urlencoded form to send the request using axios

            const formData = new FormData();
            formData.append('phone', username);
            formData.append('password', password);

            // send the request to the server using axios
            const response = (await axios.post('/login', formData, {
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                    // 'Referer': 'http://localhost:3000'
                }
            })).data
            localStorage.setItem("token", response.token);
            return response;
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
            localStorage.removeItem("token");
            return await axios.post("/logout", { headers: CSRFHeader() });
        }
        catch (err) {
            return null;
        }
    }

    static async csrf() {
        try {
            const csrfCode = await axios.get("/sanctum/csrf-cookie");
            return csrfCode.data
        }
        catch (err) {
            return "";
        }
    }

    static async changeInfo(name, email, phone) {
        if (!name || !email || !phone) return;
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            return (await axios.post("/api/student/personal-information", formData, { headers: CSRFHeader() })).data
        }
        catch (err) {
            return null;
        }

    }

    /**
     * 
     * @param {string} oldPassword 
     * @param {string} newPassword 
     * @param {string} newPasswordConfirmation 
     * @returns {Promise<{status: boolean,message?: string}>}
     */
    static async changePassword(oldPassword, newPassword, newPasswordConfirmation) {
        const form = new FormData();
        form.append("old_password", oldPassword);
        form.append("new_password", newPassword);
        form.append("new_password_confirmation", newPasswordConfirmation);
        try {
            return (await axios.post("/api/student/password", form, { headers: CSRFHeader() })).data
        }
        catch (err) {
            console.log("An Error Occured When Trying to change the password");
            console.log(err);
            return {
                message: "there is unknown problem with this change password method, please try again",
                status: false
            }
        }
    }

    /**
     * 
     * @param {import("@/types/User").RequiredRegisterData} data 
     * @returns {Promise<{status: boolean, user?:User,message?: string}>}
     */
    static async register(data) {
        try {

            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("password_confirmation", data.password_confirmation);
            formData.append("name", data.name);
            formData.append("phone", data.phone);

            return (await axios.post("/register", formData, { headers: CSRFHeader() })).data
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
            // TODO: send a Bearer token with a protected request
            const user = await axios.get("/api/user", { headers: CSRFHeader() });
            return user.data;
        }
        catch (err) {
            return null;
        }
    }

    /**
 * 
 * @param {import("@/types/static/global").EnrollCourse} data 
 */
    static async enrollCourse(data) {
        const formdata = new FormData();
        formdata.append("student_id", data.student_id);
        formdata.append("course_id", data.student_id);
        formdata.append("price", data.price);

        try {
            return (await axios.post("/api/student/enroll", formdata, { headers: CSRFHeader() })).data
        }
        catch (err) {
            console.log("error while enrolling the course");
            console.log("data was:", data);
            console.log("error was:", err);
        }
    }
}