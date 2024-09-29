import { axios } from "./axios";

export default class DynamicPagesApi {
    /**
     * @param {import("@/types/CourseFilter").CourseFilter} filter
     * @returns {Promise<{course: import("@/types/static/global").Course,relatedCourses:import("@/types/static/global").Course[]}|import("@/types/static/global").Course[]>}
     */
    static async courses(filter) {
        try {
            let data = null;
            if (filter.id) {
                data = (await axios.get(`/api/courses/${filter.id}/details`)).data;
            }
            else {
                const searchParams = new URLSearchParams();
                if (filter.categoryId) searchParams.set("categoryId", filter.categoryId);
                if (filter.levelId) searchParams.set("levelId", filter.levelId);
                if (filter.search) searchParams.set("search", filter.search);



                console.log(searchParams.toString());
                data = (await axios.get(`/api/courses?${searchParams}`)).data;
            }

            return data || [];
        }
        catch (err) {
            console.error("an unknown error occured when trying to fetch courses");
            console.error("error was:", err);
            console.error("filter was:", filter);
            return []
        }
    }

    /**
     * 
     * @returns {Promise<import("@/types/static/global").Course[]>}
     */
    static async studentCourses() {
        try {
            const data = await axios.get("/api/student/courses");
            return data.data?.data || [];
        }
        catch (err) {
            return [];
        }
    }
}