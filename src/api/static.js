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

    /**
     * @returns {Promise<import("@/types/static/global").Category[]>}
     */
    static async getCategories() {
        return [
            {
                id: 1,
                name: "category",
                description: "category"
            },
            {
                id: 2,
                name: "category 2",
                description: "category"
            },
            {
                id: 3,
                name: "category 3",
                description: "category"
            },
        ]
    }
}