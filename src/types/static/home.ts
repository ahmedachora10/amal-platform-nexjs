import { About } from "./about";
import { Category, Course, Faq, Feature, Testimonial } from "./global";

export type SliderData = {
    id: number,
    image: string,
    icon: string
};

export type Level = {
    id: number,
    name: string
}

export interface HomePageData {
    sliders: SliderData[];
    faqs: Faq[];
    categories: Category[];
    levels: Level[];
    about: About[];
    bestSellingListCourses: Course[];
    topOfListCourses: Course[];
    features: Feature[];
    testimonials: Testimonial[];
}
