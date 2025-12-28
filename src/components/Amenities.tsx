"use client";

import Image from "next/image";

const amenities = [
    {
        name: "Open Air Gym",
        image: "/assets/amenities-01.png"
    },
    {
        name: "Swimming Pool",
        image: "/assets/amentites-02.png"
    },
    {
        name: "Clubhouse",
        image: "/assets/amenities-03.png"
    },
    {
        name: "Indoor Games Room",
        image: "/assets/amenities-05.png"
    },
    {
        name: "Banquet Hall",
        image: "/assets/amenities-06.png"
    },
    {
        name: "Multi Court",
        image: "/assets/amenities-07.png"
    },
];

export default function Amenities() {
    return (
        <section id="amenities" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 uppercase">
                    AMENITIES
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={amenity.image}
                                    alt={amenity.name}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="py-3 px-2">
                                <p className="text-sm font-medium text-center text-foreground">
                                    {amenity.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
