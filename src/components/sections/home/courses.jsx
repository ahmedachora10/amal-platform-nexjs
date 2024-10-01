import Course from "@/components/cards/Course";
import Carousel from "./Carousel";
/**
 * 
 * @param {{data:import("@/types/static/global").Course[]}} param0 
 */
export default function Courses({ data }) {
    return (
        data.length ? (
            <Carousel slides={data.concat(data).concat(data).map(item => (
                <Course title={item.name} category={item.category.name} image={item.thumbnail} subscriptions={item.subscriptions_count} link={"/courses/" + item.id} price={item.price} rating={"0.0"} courseId={item.id} />
            ))
            } />
        ) : null
    )
}