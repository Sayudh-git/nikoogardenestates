"use client";

import Image from "next/image";

const amenities = [
    "Swimming Pool",
    "Gymnasium",
    "Gardens",
    "Kids Play Area",
    "Clubhouse",
    "Sports Courts",
];

export default function Amenities() {
    return (
        <section id="amenities" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 uppercase">
                    Amenities
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src="/assets/amenities-1.png"
                                    alt={amenity}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-white py-2 px-3">
                                <p className="text-sm font-medium text-center">{amenity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
