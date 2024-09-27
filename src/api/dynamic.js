export default class DynamicPagesApi {
    /**
     * @param {import("@/types/CourseFilter").CourseFilter} filter
     * @returns {import("@/types/static/global").Course[]}
     */
    static async courses(filter) {
        const data = [
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
            },
        ];

        if (filter.id) return [data[0]];
        return data;
    }
}