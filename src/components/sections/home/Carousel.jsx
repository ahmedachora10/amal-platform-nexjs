'use client';
import React, { useRef } from 'react';

/**
 * Carousel component to display a set of JSX slides with natural size.
 * The component is responsive to all screen sizes, and uses scroll snapping for precise slide scrolling.
 *
 * @component
 * @example
 * return (
 *   <Carousel slides={[
 *     <div>Slide 1</div>,
 *     <div>Slide 2</div>,
 *     <div>Slide 3</div>
 *   ]} />
 * )
 * 
 * @param {Object} props
 * @param {Array} props.slides - Array of JSX slide content to display in the carousel.
 * @returns {JSX.Element} The rendered carousel component.
 */
export default function Carousel({ slides }) {
    const carouselRef = useRef(null);

    /**
     * Go to the next slide by scrolling
     */
    const nextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth, // Scroll by one full viewport width
                behavior: 'smooth'
            });
        }
    };

    /**
     * Go to the previous slide by scrolling
     */
    const prevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth, // Scroll back by one full viewport width
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Buttons for navigating (hidden on small screens) */}
            <button
                onClick={prevSlide}
                className="prev absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 text-white p-2 rounded-full z-10 hidden md:block"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="next absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 text-white p-2 rounded-full z-10 hidden md:block"
            >
                ›
            </button>

            {/* Carousel container with scroll snapping */}
            <div
                ref={carouselRef}
                className="carousel-inner flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 w-full"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 snap-center"
                        style={{ width: '24rem', flexShrink: 1 }} // Set width of each slide
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};
