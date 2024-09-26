import { Faq } from "./global"

export interface About {
    id: 1,
    image: string,
    title: string,
    description: string,
    excerpt: string,
    properties: string[],
    show_in_home_page: false,
    created_at: Date
    updated_at: Date
}


export interface AboutPageData {
    faqs: Faq[],
    about: About[]
}