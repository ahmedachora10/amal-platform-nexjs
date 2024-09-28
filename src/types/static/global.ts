export interface Faq {
    id: number,
    question: string,
    answer: string
}
export interface Category {
    id: number,
    name: string,
    description: string
}

export interface CourseLesson {
    id: number,
    name: string,
    quizzes: [],
    videos: []
}

export interface Course {
    id: number,
    level: {
        id: number,
        name: string
    },
    category: {
        id: number,
        name: string,
        description: string
    },
    thumbnail: string,
    name: string;
    description: string,
    overview: string,
    properties: string[],
    duration: number,
    instructor: string,
    oldPrice: number,
    price: number,
    status: number,
    best_selling_list: boolean,
    top_of_list: boolean,
    subscriptions_count: number,
    lessons_count: null | number,
    videos_count: null | number,
    relatedCourses: Course[] | null;
    lessons: { id: number, name: string, quizzes: [], videos: [] }[] | null;
}

export interface Feature {
    id: number,
    image: string,
    name: string,
    description: null | string,
    status: number,
    created_at: Date,
    updated_at: Date,
}

export interface Testimonial {
    id: number,
    image: "string",
    name: string,
    profession: string,
    comment: string,
    status: number,
    created_at: Date,
    updated_at: Date
}