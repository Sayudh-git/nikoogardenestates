"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-[70vh] min-h-[500px]">
            <Image
                src="/assets/home-banner.jpg"
                alt="Bhartiya City Nikoo Homes"
                fill
                className="object-cover"
                priority
            />
        </section>
    );
}
