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
        return {
            "sliders": [
                {
                    "id": 1,
                    "image": "http://localhost:8000/storage/images/sliders/66cdf9840b96c_2024-08-27-16-06-28.jpg",
                    "icon": "https://th.bing.com/th/id/OIP.g1K70P37u_RLgGQe4Ii5RQHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "id": 3,
                    "image": "http://localhost:8000/storage/images/sliders/66cdf9247d67b_2024-08-27-16-04-52.jpg",
                    "icon": "http://localhost:8000/storage/images/sliders/66ecc5a7e028c_2024-09-20-00-45-27.jpg"
                },
                {
                    "id": 5,
                    "image": "http://localhost:8000/storage/images/sliders/66ecc496dd0f8_2024-09-20-00-40-54.jpg",
                    "icon": "http://localhost:8000/storage/images/sliders/66ecc496e05a6_2024-09-20-00-40-54.jpeg"
                }
            ],
            "faqs": [
                {
                    "id": 2,
                    "question": "Consectetur earum n",
                    "answer": "Quia consequatur dis"
                },
                {
                    "id": 3,
                    "question": "Eius sit a magna do",
                    "answer": "Elit sunt lorem mag"
                },
                {
                    "id": 4,
                    "question": "Expedita rem ex vel",
                    "answer": "Fugit placeat dolo"
                }
            ],
            "categories": [
                {
                    "id": 1,
                    "name": "Arabic",
                    "description": null
                },
                {
                    "id": 2,
                    "name": "English",
                    "description": "Velit labore hic fac"
                }
            ],
            "levels": [
                {
                    "id": 1,
                    "name": "Karleigh Hayes"
                }
            ],
            "about": [],
            "bestSellingListCourses": [
                {
                    "id": 3,
                    "level": {
                        "id": 1,
                        "name": "Karleigh Hayes"
                    },
                    "category": {
                        "id": 2,
                        "name": "English",
                        "description": "Velit labore hic fac"
                    },
                    "thumbnail": "http://localhost:8000/storage/images/courses/66e062de879a8_2024-09-10-15-16-46.jpg",
                    "name": "Abdul Galloway",
                    "description": "Enim pariatur Quos",
                    "overview": "Quae ut fugiat dese",
                    "properties": null,
                    "duration": 85,
                    "instructor": "Non aliquam consecte",
                    "oldPrice": 938,
                    "price": 982,
                    "status": 1,
                    "best_selling_list": true,
                    "top_of_list": true,
                    "subscriptions_count": 0,
                    "lessons_count": null,
                    "videos_count": null
                },
                {
                    "id": 4,
                    "level": {
                        "id": 1,
                        "name": "Karleigh Hayes"
                    },
                    "category": {
                        "id": 2,
                        "name": "English",
                        "description": "Velit labore hic fac"
                    },
                    "thumbnail": "http://localhost:8000/storage/images/courses/66ecd1f5c4f18_2024-09-20-01-37-57.jpg",
                    "name": "Gwendolyn Finley",
                    "description": "Inventore quaerat qu",
                    "overview": "Aut in Nam quasi eli",
                    "properties": [
                        "Ad iste veniam culp",
                        "qfqfqf",
                        "qsfqfqfq"
                    ],
                    "duration": 46,
                    "instructor": "Vero dolore officiis",
                    "oldPrice": 972,
                    "price": 805,
                    "status": 1,
                    "best_selling_list": true,
                    "top_of_list": true,
                    "subscriptions_count": 0,
                    "lessons_count": null,
                    "videos_count": null
                }
            ],
            "topOfListCourses": [
                {
                    "id": 3,
                    "level": {
                        "id": 1,
                        "name": "Karleigh Hayes"
                    },
                    "category": {
                        "id": 2,
                        "name": "English",
                        "description": "Velit labore hic fac"
                    },
                    "thumbnail": "http://localhost:8000/storage/images/courses/66e062de879a8_2024-09-10-15-16-46.jpg",
                    "name": "Abdul Galloway",
                    "description": "Enim pariatur Quos",
                    "overview": "Quae ut fugiat dese",
                    "properties": null,
                    "duration": 85,
                    "instructor": "Non aliquam consecte",
                    "oldPrice": 938,
                    "price": 982,
                    "status": 1,
                    "best_selling_list": true,
                    "top_of_list": true,
                    "subscriptions_count": 0,
                    "lessons_count": null,
                    "videos_count": null
                },
                {
                    "id": 4,
                    "level": {
                        "id": 1,
                        "name": "Karleigh Hayes"
                    },
                    "category": {
                        "id": 2,
                        "name": "English",
                        "description": "Velit labore hic fac"
                    },
                    "thumbnail": "http://localhost:8000/storage/images/courses/66ecd1f5c4f18_2024-09-20-01-37-57.jpg",
                    "name": "Gwendolyn Finley",
                    "description": "Inventore quaerat qu",
                    "overview": "Aut in Nam quasi eli",
                    "properties": [
                        "Ad iste veniam culp",
                        "qfqfqf",
                        "qsfqfqfq"
                    ],
                    "duration": 46,
                    "instructor": "Vero dolore officiis",
                    "oldPrice": 972,
                    "price": 805,
                    "status": 1,
                    "best_selling_list": true,
                    "top_of_list": true,
                    "subscriptions_count": 0,
                    "lessons_count": null,
                    "videos_count": null
                }
            ],
            "features": [
                {
                    "id": 3,
                    "image": "images/testimonials/66e039eb2cd84_2024-09-10-12-22-03.jpeg",
                    "name": "Hollee Horton",
                    "description": null,
                    "status": 1,
                    "created_at": "2024-09-10T12:22:03.000000Z",
                    "updated_at": "2024-09-10T12:22:03.000000Z"
                }
            ],
            "testimonials": [
                {
                    "id": 2,
                    "image": "images/testimonials/66e03b3b00689_2024-09-10-12-27-39.jpg",
                    "name": "Declan Bradford sfsf",
                    "profession": "Exercitationem illum sfsfs",
                    "comment": "Itaque natus eligend sfsf",
                    "status": 1,
                    "created_at": "2024-09-10T12:24:54.000000Z",
                    "updated_at": "2024-09-10T12:27:43.000000Z"
                }
            ]
        }
        const data = (await axios.get("/api/home")).data
        return data;
    }

    /**
     * @returns {Promise<import("@/types/static/global").Category[]>}
     */
    static async getCategories() {
        try {
            return (await axios.get("/api/categories")).data?.data || []
        }
        catch (err) {
            console.error("error while trying to fetch categories");
            console.error("error was:", err);
            return [];
        }

        // return [
        //     {
        //         id: 1,
        //         name: "category",
        //         description: "category"
        //     },
        //     {
        //         id: 2,
        //         name: "category 2",
        //         description: "category"
        //     },
        //     {
        //         id: 3,
        //         name: "category 3",
        //         description: "category"
        //     },
        // ]
    }

    /**
     * @returns {Promise<import("@/types/static/global").Level[]>}
     */
    static async getLevels() {
        try {
            return (await axios.get("/api/levels")).data?.data || []
        }
        catch (err) {
            console.error("error while trying to fetch levels");
            console.error("error was:", err);
            return [];
        }
        // return [
        //     {
        //         id: 1,
        //         name: "Biggener",
        //     },
        //     {
        //         id: 2,
        //         name: "Intermediate",
        //     },
        //     {
        //         id: 3,
        //         name: "Advanced",
        //     },
        // ]
    }
}