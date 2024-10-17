'use server';

import DynamicPagesApi from "@/api/dynamic";

/**
 * 
 * @param {import("@/types/CourseFilter").CourseFilter} filter 
 */
export async function getCourses(filter) {
    return await DynamicPagesApi.courses(filter);
}