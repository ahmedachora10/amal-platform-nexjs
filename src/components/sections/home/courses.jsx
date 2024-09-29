import Course from "@/components/cards/Course";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * 
 * @param {{data:import("@/types/static/global").Course[]}} param0 
 */
export default function Courses({ data }) {
    return (
        <Carousel className="col-12">
            <CarouselContent className="-ml-1">
                {data.map((item, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-4">
                            <Course title={item.name} category={item.category.name} image={item.thumbnail} subscriptions={item.subscriptions_count} link={"/courses/" + item.id} price={item.price} rating={"0.0"} courseId={item.id} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="relative lg:start-[87%] md:start-[80%] sm:start-[74%] start-[40%] rounded h-[3rem] w-[70px] top-[2rem]" />
            <CarouselNext className="relative lg:start-[87%] md:start-[80%] sm:start-[74%] start-[40%] rounded h-[3rem] w-[70px] top-[2rem] ms-3  border-primary" />
        </Carousel>
    )
}