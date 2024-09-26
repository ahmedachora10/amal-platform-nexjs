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
}