"use client";

import Image from "next/image";

const plans = [
    "BEDROOM",
    "KITCHEN",
    "LIVING",
    "DINING",
    "BALCONY",
    "MASTER BEDROOM",
    "STUDY",
    "GUEST ROOM",
    "UTILITY",
    "TERRACE",
];

export default function HomePlans() {
    return (
        <section id="floorplan" className="py-20 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                    MORE PLANS THAN YOU HAVE PLANS FOR.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((title, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src="/assets/2bhk.jpg"
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-4 uppercase">
                                    {title}
                                </h3>
                                <button className="w-full py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors">
                                    ENQUIRE NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
