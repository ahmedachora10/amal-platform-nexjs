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
            data = await axios.get("/api/courses?page=1");
        }
        return data;
    }
}