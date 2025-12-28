"use client";

import Image from "next/image";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function AboutSection() {
    const { openModal } = useContactModal();
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Left - About Text (2/3 width) */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase">
                            ABOUT BHARTIYA GARDEN ESTATE
                        </h2>
                        <div className="space-y-1 text-muted-foreground">
                            <p>
                                Bhartiya Garden Estate, an integral part of the prestigious Bhartiya City, is crafted to bring together
                                modern living, timeless design, and exceptional craftsmanship. Conceived with the vision of
                                creating world-class residential spaces, this development offers the perfect blend of luxury, comfort,
                                and convenience in one of Bangalore's most desirable locations.
                            </p>
                            <p>
                                With spacious, Vastu-compliant homes and a thoughtfully curated range of premium amenities, it promises an elevated living
                                experience tailored for today's modern families.
                            </p>
                            <p>
                                Built on the principles of quality, innovation, and integrity, Bhartiya Garden Estate reflects the
                                developer's unwavering commitment to excellence. Every home is designed with meticulous
                                attention to detail and smart planning, ensuring not just functionality but also a lifestyle of
                                refinement. More than just residences, these homes represent a new benchmark in urban living,
                                redefining what it means to live in Bangalore.
                            </p>
                        </div>
                        <button 
                            onClick={openModal}
                            className="mt-8 bg-primary text-white uppercase font-bold py-3 px-8 hover:bg-primary/90 transition-colors"
                        >
                            GET A CALLBACK
                        </button>
                    </div>

                    {/* Right - Image (1/3 width) */}
                    <div className="relative h-[300px] md:h-[350px]">
                        <Image
                            src="/assets/last-img.jpg"
                            alt="Bhartiya Urban"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

