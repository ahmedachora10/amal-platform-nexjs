export interface CourseFeatures {
    enrolled: number;
    duration: number;
    lectures: number;
    price: number;
    instructorName: string;
    categories: string[];
    tags: string[];
    courseId: number | string;
}