

import icon from '../../app/test.jpeg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Course from "../cards/Course";

export default function BestSellingCourses() {
    return (
        <Carousel className="col-12">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-4">
                    <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
                <CarouselPrevious className="relative lg:start-[87%] md:start-[80%] sm:start-[74%] start-[40%] rounded h-[3rem] w-[70px] top-[2rem]" />
                <CarouselNext className="relative lg:start-[87%] md:start-[80%] sm:start-[74%] start-[40%] rounded h-[3rem] w-[70px] top-[2rem] ms-3  border-primary" />
        </Carousel>
    );
};