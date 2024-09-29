import { axios } from "./axios";

export default class DynamicPagesApi {
    /**
     * @param {import("@/types/CourseFilter").CourseFilter} filter
     * @returns {Promise<{course: import("@/types/static/global").Course,relatedCourses:import("@/types/static/global").Course[]}>}
     */
    static async courses(filter) {
        return [
            {
                "id": 5,
                "level": {
                    "id": 1,
                    "name": "Karleigh Hayes"
                },
                "category": {
                    "id": 1,
                    "name": "Arabic",
                    "description": null
                },
                "thumbnail": "http://localhost:8000/storage/images/courses/66ecd30e8edb5_2024-09-20-01-42-38.jpg",
                "name": "Karly Clements",
                "description": "Commodo ad sit ut d qfqfqf",
                "overview": "Voluptate sint nostr qfqfqf",
                "properties": [
                    "sfsqfqfq",
                    "sgqgqgqg"
                ],
                "duration": 42,
                "instructor": "Ut nobis necessitati",
                "oldPrice": 0,
                "price": 195,
                "status": 1,
                "best_selling_list": false,
                "top_of_list": false,
                "subscriptions_count": 0,
                "lessons_count": 1,
                "videos_count": 0,
                "lessons": [
                    {
                        "id": 9,
                        "name": "Lesson 2",
                        "quizzes": [],
                        "videos": []
                    }
                ]
            },
            {
                "id": 5,
                "level": {
                    "id": 1,
                    "name": "Karleigh Hayes"
                },
                "category": {
                    "id": 1,
                    "name": "Arabic",
                    "description": null
                },
                "thumbnail": "http://localhost:8000/storage/images/courses/66ecd30e8edb5_2024-09-20-01-42-38.jpg",
                "name": "Karly Clements",
                "description": "Commodo ad sit ut d qfqfqf",
                "overview": "Voluptate sint nostr qfqfqf",
                "properties": [
                    "sfsqfqfq",
                    "sgqgqgqg"
                ],
                "duration": 42,
                "instructor": "Ut nobis necessitati",
                "oldPrice": 0,
                "price": 195,
                "status": 1,
                "best_selling_list": false,
                "top_of_list": false,
                "subscriptions_count": 0,
                "lessons_count": 1,
                "videos_count": 0,
                "lessons": [
                    {
                        "id": 9,
                        "name": "Lesson 2",
                        "quizzes": [],
                        "videos": []
                    }
                ]
            }, {
                "id": 5,
                "level": {
                    "id": 1,
                    "name": "Karleigh Hayes"
                },
                "category": {
                    "id": 1,
                    "name": "Arabic",
                    "description": null
                },
                "thumbnail": "http://localhost:8000/storage/images/courses/66ecd30e8edb5_2024-09-20-01-42-38.jpg",
                "name": "Karly Clements",
                "description": "Commodo ad sit ut d qfqfqf",
                "overview": "Voluptate sint nostr qfqfqf",
                "properties": [
                    "sfsqfqfq",
                    "sgqgqgqg"
                ],
                "duration": 42,
                "instructor": "Ut nobis necessitati",
                "oldPrice": 0,
                "price": 195,
                "status": 1,
                "best_selling_list": false,
                "top_of_list": false,
                "subscriptions_count": 0,
                "lessons_count": 1,
                "videos_count": 0,
                "lessons": [
                    {
                        "id": 9,
                        "name": "Lesson 2",
                        "quizzes": [],
                        "videos": []
                    }
                ]
            }
        ]
        try {
            let data = null;
            if (filter.id) {
                data = [(await axios.get(`/api/courses/${filter.id}/details`)).data];
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