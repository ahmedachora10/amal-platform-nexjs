import { CSRFHeader, getCookie } from "@/utils/helpers";
import { axios } from "./axios";

export default class DynamicPagesApi {
  /**
   * @param {import("@/types/CourseFilter").CourseFilter} filter
   * @returns {Promise<{course: import("@/types/static/global").Course,relatedCourses:import("@/types/static/global").Course[]}|import("@/types/static/global").Course[]>}
   */
  static async courses(filter) {
    try {
      let data = null;

      const searchParams = new URLSearchParams();
      if (filter.categoryId) searchParams.set("categoryId", filter.categoryId);
      if (filter.levelId) searchParams.set("levelId", filter.levelId);
      if (filter.search) searchParams.set("search", filter.search);
      // if no filter value provided
      if (!filter.categoryId && !filter.levelId && !filter.search) {
        data = (await axios.get(`/api/courses/filter`)).data?.courses?.data;
      } else {
        data = (await axios.get(`/api/courses/filter?${searchParams}`)).data
          ?.courses?.data;
      }

      return data || [];
    } catch (err) {
      console.error("an unknown error occured when trying to fetch courses");
      console.error("error was:", err);
      console.error("filter was:", filter);
      return [];
    }
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<{course: import("@/types/static/global").Course, relatedCourses: import("@/types/static/global").Course[]}|null>}
   */
  static async course(id) {
    try {
      return (await axios.get(`/api/courses/${id}/details`)).data;
    } catch (Err) {
      return null;
    }
  }

  /**
   *
   * @param {number} courseId
   * @returns {Promise<import("@/types/static/global").Lesson[] | null>}
   */
  static async getLessonsDetails(courseId) {
    try {
      const responseBody = (await axios.get(`/api/sections/${courseId}/details`))
        .data;
      return responseBody?.data || null;
    } catch (err) {
      return null;
    }
  }

  /**
   *
   * @returns {Promise<import("@/types/static/global").Course[]>}
   */
  static async studentCourses() {
    try {
      const data = (await axios.get("/api/student/courses", { headers: CSRFHeader() })).data;
      return data?.data || [];
    } catch (err) {
      return [];
    }
  }

  /**
   *
   * @param {number} quizeId
   * @returns {Promise<import("@/types/static/global").Quiz | null>}
   */
  static async studentPassTheTest(quizeId, answers) {
    try {
      return (
        await axios.post(
          `/api/student/pass-the-test`,
          {
            'quiz_id' :quizeId,
            questions : answers
          },
          { headers: CSRFHeader() }
        )
      ).data;
    } catch (err) {
      return null;
    }
  }

  static async studentTests() {
    try {
      const data = (await axios.get("/api/student/passed-exams", { headers: CSRFHeader() })).data;
      return data?.data || [];
    } catch (err) {
      return [];
    }
  }
  static async checkQuiz(quizId) {
    try {
      const data = await axios.get(`/api/student/test-result/${quizId}`, { headers: CSRFHeader() });
      return data || [];
    } catch (err) {
      console.log(err);
      
      return [];
    }
  }
}
