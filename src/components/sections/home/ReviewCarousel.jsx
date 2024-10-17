'use client';
import * as React from 'react';
import { CarouselContent, CarouselItem, Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export default function ReviewCarousel ({children}) {
    return (
        <Carousel plugins={[
            Autoplay({
            delay: 2000,
            }),
        ]}>
            <CarouselContent>
                {children}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
};