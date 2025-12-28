"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/assets/banner-01.jpg",
        "/assets/banner-02.jpg",
        "/assets/banner-03.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 12000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Images */}
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Bhartiya City Nikoo Homes ${index + 1}`}
                    fill
                    quality={100}
                    className={`object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    priority={index === 0}
                    sizes="100vw"
                />
            ))}

            {/* Dots Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-red-600 w-6 sm:w-8"
                                : "bg-white/60 w-2.5 sm:w-3 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}