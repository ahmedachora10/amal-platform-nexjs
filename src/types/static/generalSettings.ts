import { AboutPageData } from "./about";
import { Category, Course, Faq, Feature, Level, Testimonial } from "./global";
import { SliderData } from "./home";

export interface GeneralSettings {
    sliders: SliderData[];
    faqs: Faq[],
    categories: Category[],
    levels: Level[],
    about: AboutPageData,
    bestSellingListCourses: Course[];
    topOfListCourses: Course[];
    features: Feature[];
    testimonials: Testimonial[]
}