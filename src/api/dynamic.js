import { axios } from "./axios";

export default class DynamicPagesApi {
    /**
     * @param {import("@/types/CourseFilter").CourseFilter} filter
     * @returns {Promise<{course: import("@/types/static/global").Course,relatedCourses:import("@/types/static/global").Course[]}>}
     */
    static async courses(filter) {
        let data = null;
        if (filter.id) {
            data = [(await axios.get(`/api/courses/${filter.id}/details`)).data];
        }
        else {
            const searchParams = new URLSearchParams();
            if (filter.level) searchParams.set("level", filter.level);
            if (filter.search) searchParams.set("search", filter.search);


            data = await axios.get(`/api/courses?${searchParams}`);
        }
        return data;
    }

    /**
     * 
     * @returns {Promise<import("@/types/static/global").Course[]>}
     */
    static async studentCourses() {
        try {
            const data = await axios.get("/api/student/courses");
            return data.data;
        }
        catch (err) {
            return [];
        }
    }
}