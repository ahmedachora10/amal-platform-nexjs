import ClientReview from "@/components/cards/ClientReview";
import TitleWithLine from "@/components/title_with_line";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Bg3 from "@/app/images/home/clients-reviews-section-bg.svg";

/**
 * 
 * @param {{data: import("@/types/static/global").Testimonial[]}} param0
 */
export default function Reviews({ data }) {
    return (

        <section className="bg-[#EBF3FF] px pt-7 pb-50 lg:pb-52 mb-[50%] lg:mb-0 relative">

            <div className="flex justify-center items-center overflow-hidden absolute w-full h-full">
                <Image draggable={false} src={Bg3} className="max-w-[100vw] w-[116.93%]" />
            </div>

            <div className="flex flex-col gap-9 w-full mt-10 p-7">

                <div className="flex grow flex-col items-center gap-7">

                    <div className="flex gap-4">
                        <TitleWithLine />
                        <TitleWithLine title="Client Testimonials" />
                    </div>

                    <h1 className="text-3xl">What our clients say</h1>
                </div>

                <div className="hidden md:flex grow gap-4 justify-evenly flex-col lg:flex-row z-10">
                    <Children data={data} />
                </div>

                <div className="block md:hidden">
                    <Carousel className="flex">
                        <CarouselContent>
                            <Children data={data} />
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

        </section>
    )
}

/**
 * 
 * @param {{data: import("@/types/static/global").Testimonial[]}} param0
 */
function Children({ data }) {
    return (
        data.map((item, index) => (
            <ClientReview key={index} name={item.name} reviewText={item.comment} subtitle={item.profession} rate={item.status} imageComponent={<img src={item.image} />} />
        ))
    )
}