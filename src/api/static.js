export class StaticPagesApi {
    /**
     * @returns {import("@/types/static/about").AboutPageData}
     */
    static async about() {

        const data = {
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
            "about": [
                {
                    "id": 1,
                    "image": "https://media.gettyimages.com/id/1384332902/photo/focused-young-woman.jpg?s=2048x2048&w=gi&k=20&c=_JpAKVGAIdJRdsTBpuaKthh49ifQjV6ZP1wbC2vcTMM=",
                    "title": "Accusantium aliquip",
                    "description": "Omnis fuga Omnis si",
                    "excerpt": "At sit tempore nis",
                    "properties": [
                        "Dolor laboris ea cul"
                    ],
                    "show_in_home_page": false,
                    "created_at": "2024-09-19T14:48:29.000000Z",
                    "updated_at": "2024-09-20T03:19:00.000000Z"
                },
                {
                    "id": 1,
                    "image": "https://media.gettyimages.com/id/1384332902/photo/focused-young-woman.jpg?s=2048x2048&w=gi&k=20&c=_JpAKVGAIdJRdsTBpuaKthh49ifQjV6ZP1wbC2vcTMM=",
                    "title": "Accusantium aliquip",
                    "description": "Omnis fuga Omnis si",
                    "excerpt": "At sit tempore nis",
                    "properties": [
                        "Dolor laboris ea cul"
                    ],
                    "show_in_home_page": false,
                    "created_at": "2024-09-19T14:48:29.000000Z",
                    "updated_at": "2024-09-20T03:19:00.000000Z"
                },
            ]
        };

        return data;
    }


    /**
     * 
     * @returns {import("@/types/static/home").HomePageData}
     */
    static async home() {
        /**
         * @type {import("@/types/static/home").HomePageData}
         */
        const data = {
            "sliders": [
                {
                    "id": 1,
                    "image": "https://i.ibb.co/xXthxxz/Group-13428.png",
                    "icon": "https://i.ibb.co/Vjvsw9C/Science.png"
                },
                {
                    "id": 3,
                    "image": "https://i.ibb.co/xXthxxz/Group-13428.png",
                    "icon": "https://i.ibb.co/Vjvsw9C/Science.png"
                },
                {
                    "id": 5,
                    "image": "https://i.ibb.co/xXthxxz/Group-13428.png",
                    "icon": "https://i.ibb.co/Vjvsw9C/Science.png"
                },
                {
                    "id": 5,
                    "image": "https://i.ibb.co/xXthxxz/Group-13428.png",
                    "icon": "https://i.ibb.co/Vjvsw9C/Science.png"
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
            "about": [
                {
                    "created_at": new Date(),
                    "updated_at": new Date,
                    "description": "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,",
                    "title": "Education in continuing a proud tradition.",
                    "properties": [
                        "Metus interdum metus",
                        "Nec dapibus sit",
                        "Ligula curabitur maecenas",
                        "Vivamus quisque gravida",
                        "Pellentesque sodales rhoncus",
                    ],
                    "image": "https://i.ibb.co/xXthxxz/Group-13428.png"
                }
            ],
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
                    "thumbnail": "https://i.ibb.co/xXthxxz/Group-13428.png",
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
                    "thumbnail": "https://i.ibb.co/xXthxxz/Group-13428.png",
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
                    "thumbnail": "https://i.ibb.co/xXthxxz/Group-13428.png",
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
                    "thumbnail": "https://i.ibb.co/xXthxxz/Group-13428.png",
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
                    "image": "https://i.ibb.co/2hgnrpq/test.jpg",
                    "name": "Hollee Horton",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo",
                    "status": 1,
                    "created_at": "2024-09-10T12:22:03.000000Z",
                    "updated_at": "2024-09-10T12:22:03.000000Z"
                },
                {
                    "id": 4,
                    "image": "https://i.ibb.co/2hgnrpq/test.jpg",
                    "name": "Hollee Horton",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo",
                    "status": 1,
                    "created_at": "2024-09-10T12:22:03.000000Z",
                    "updated_at": "2024-09-10T12:22:03.000000Z"
                },
                {
                    "id": 5,
                    "image": "https://i.ibb.co/2hgnrpq/test.jpg",
                    "name": "Hollee Horton",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo",
                    "status": 1,
                    "created_at": "2024-09-10T12:22:03.000000Z",
                    "updated_at": "2024-09-10T12:22:03.000000Z"
                },
                {
                    "id": 6,
                    "image": "https://i.ibb.co/2hgnrpq/test.jpg",
                    "name": "Hollee Horton",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo",
                    "status": 1,
                    "created_at": "2024-09-10T12:22:03.000000Z",
                    "updated_at": "2024-09-10T12:22:03.000000Z"
                },
            ],
            "testimonials": [
                {
                    "id": 2,
                    "image": "https://i.ibb.co/Vjvsw9C/Science.png",
                    "name": "Declan Bradford sfsf",
                    "profession": "Tincidunt",
                    "comment": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
                    "status": 1,
                    "created_at": "2024-09-10T12:24:54.000000Z",
                    "updated_at": "2024-09-10T12:27:43.000000Z"
                },
                {
                    "id": 2,
                    "image": "https://i.ibb.co/Vjvsw9C/Science.png",
                    "name": "Declan Bradford sfsf",
                    "profession": "Tincidunt",
                    "comment": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
                    "status": 1,
                    "created_at": "2024-09-10T12:24:54.000000Z",
                    "updated_at": "2024-09-10T12:27:43.000000Z"
                },
            ]
        }

        return data;
    }
}