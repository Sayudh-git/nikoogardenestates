"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative w-full h-screen min-h-[600px]">
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
