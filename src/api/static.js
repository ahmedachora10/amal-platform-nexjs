import { axios } from "./axios";

export class StaticPagesApi {
    /**
     * @returns {import("@/types/static/about").AboutPageData}
     */
    static async about() {
        const data = (await axios.get("/api/about")).data
        return data;
    }


    /**
     * 
     * @returns {import("@/types/static/home").HomePageData}
     */
    static async home() {
        const data = (await axios.get("/api/home")).data
        return data;
    }
}