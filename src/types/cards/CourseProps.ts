export interface CourseProps {
    image: string,
    category: string,
    title: string,
    price: string | number,
    rating: string | number,
    link: string,
    isSubscribed: boolean,
    subscriptions: number,
    courseId: number | null
}